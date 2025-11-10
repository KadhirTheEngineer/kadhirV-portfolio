// @ts-check
import { defineConfig } from 'astro/config';

const repoBase = '/kadhirV-portfolio/';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
	site: 'https://kadhirtheengineer.github.io/kadhirV-portfolio',
	base: isGitHubActions ? repoBase : '/',
});
