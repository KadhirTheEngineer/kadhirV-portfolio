#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const CONFIG_PATH = path.resolve('data/youtube-config.json');
const CACHE_PATH = path.resolve('data/youtube-cache.json');
const BLOG_DIR = path.resolve('src/content/blog');
const API_KEY = process.env.YOUTUBE_API_KEY;

if (!API_KEY) {
  console.error('Missing YOUTUBE_API_KEY env var');
  process.exit(1);
}

const readJson = (filepath, fallback) => {
  try {
    return JSON.parse(fs.readFileSync(filepath, 'utf8'));
  } catch (err) {
    if (fallback !== undefined) return fallback;
    throw err;
  }
};

const writeJson = (filepath, data) => {
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2) + '\n');
};

const config = readJson(CONFIG_PATH);
const processed = new Set(readJson(CACHE_PATH, []));

const fetchJson = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Request failed ${res.status}: ${text}`);
  }
  return res.json();
};

const getUploadsPlaylist = async (channelId) => {
  const url = new URL('https://www.googleapis.com/youtube/v3/channels');
  url.searchParams.set('part', 'contentDetails');
  url.searchParams.set('id', channelId);
  url.searchParams.set('key', API_KEY);
  const data = await fetchJson(url);
  const uploads = data?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploads) throw new Error('Unable to resolve uploads playlist for channel');
  return uploads;
};

const listPlaylistItems = async (playlistId, pageToken) => {
  const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
  url.searchParams.set('part', 'snippet');
  url.searchParams.set('playlistId', playlistId);
  url.searchParams.set('maxResults', '50');
  if (pageToken) url.searchParams.set('pageToken', pageToken);
  url.searchParams.set('key', API_KEY);
  return fetchJson(url);
};

const slugify = (text, fallback) => {
  const base = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
  return base || fallback;
};

const writeMarkdown = ({ slug, title, publishedAt, summary, tags, videoUrl, description }) => {
  const descriptionLines = (description || '').split('\n');
  const frontmatter = [
    '---',
    `title: ${title.replace(/:/g, ' -')}`,
    `publishedAt: ${publishedAt}`,
    `summary: ${summary}`,
    'tags:',
    ...(tags && tags.length ? tags.map((tag) => `  - ${tag}`) : ['  - video']),
    'isVideo: true',
    `videoUrl: ${videoUrl}`,
    'videoDescription: |-',
    ...descriptionLines.map((line) => `  ${line}`),
    '---',
    '',
    '## Notes',
    '',
    '> Auto-imported from YouTube. Add additional commentary here.',
    '',
  ].join('\n');
  const filepath = path.join(BLOG_DIR, `${slug}.md`);
  fs.writeFileSync(filepath, frontmatter, 'utf8');
};

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const main = async () => {
  ensureDir(BLOG_DIR);
  const playlistId = await getUploadsPlaylist(config.channelId);
  let pageToken;
  let newVideos = [];
  do {
    const data = await listPlaylistItems(playlistId, pageToken);
    for (const item of data.items || []) {
      const snippet = item.snippet;
      const videoId = snippet?.resourceId?.videoId;
      if (!videoId || processed.has(videoId)) continue;
      newVideos.push({
        videoId,
        title: snippet.title || 'Untitled Video',
        description: snippet.description || '',
        publishedAt: snippet.publishedAt?.slice(0, 10) || new Date().toISOString().slice(0, 10),
        tags: snippet.tags || [],
      });
    }
    pageToken = data.nextPageToken;
    break; // only latest page to keep runtime low
  } while (pageToken);

  if (!newVideos.length) {
    console.log('No new videos to import.');
    return;
  }

  for (const video of newVideos) {
    const slugBase = slugify(video.title, video.videoId);
    let slug = slugBase;
    let counter = 1;
    while (fs.existsSync(path.join(BLOG_DIR, `${slug}.md`))) {
      slug = `${slugBase}-${counter++}`;
    }
    const firstLine = (video.description || '').split('\n').find((line) => line.trim()) || 'Video update';
    const summary = firstLine.length > 140 ? `${firstLine.slice(0, 137)}...` : firstLine;
    writeMarkdown({
      slug,
      title: video.title,
      publishedAt: video.publishedAt,
      summary: summary.replace(/:/g, ' -'),
      tags: video.tags,
      videoUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
      description: video.description,
    });
    processed.add(video.videoId);
    console.log(`Created post for video ${video.videoId} -> ${slug}`);
  }

  writeJson(CACHE_PATH, Array.from(processed));
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
