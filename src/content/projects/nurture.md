---
title: Nurture
publishedAt: 2021-03-20
description: Web app that maps nearby shelters and resources for unhoused residents.
tech:
  - React
  - Leaflet.js
  - Flask
  - Python
  - Firebase
  - Bootstrap
featured: false
links:
  source: https://github.com/dch777/codefest2021
previewImage: ../../assets/projects/nurture-devpost.png
previewImageAlt: Screenshot of the Nurture shelter locator interface
---

## Summary

Nurture aggregates real-time shelter availability, services offered, and intake requirements so people experiencing homelessness can quickly filter to a program that fits their needs. The React/Leaflet front end exposes those data points on an interactive map while the backend keeps the dataset refreshed through a volunteer/staff submission portal.

## Highlights

- Designed a Flask API backed by Firebase Realtime Database so shelters can push live capacity data and have it normalize into a consistent schema.
- Built a Leaflet-powered React interface that clusters markers, color codes services (beds, meals, medical, etc.), and exposes popovers with directions and intake notes.
- Created intake/auth flows that let trusted staff update locations from the field, complete with JSON schema validation to keep the map data clean.
- Authored Bootstrap-based responsive layouts that keep the experience accessible on phones, tablets, and kiosk screens inside partner shelters.

## Outcome

Won the 3rd Place Team Prize at CodeFest 2021 for delivering a practical navigation tool for social service organizations.

## Inspiration

While volunteering at local shelters we saw unused capacity simply because visitors could not find the right program. That insight drove us to design a network that exposes what each shelter can truly deliver and gets people routed there fast.

## What it does

Nurture acts as a concierge for the unhoused community. A visitor quickly filters for the services they need—beds for families, medical referrals, meal programs—and the map highlights matching shelters along with contact info, hours, and intake notes. Staff get a lightweight admin view to update supply counts and mark when specialty resources are exhausted.

## Implementation

The backend is a Flask API that wraps Firebase Realtime Database, giving us live stream updates and built-in auth for contributors. On the frontend, React coordinates Leaflet.js map layers, geolocation, and Bootstrap UI. Each data update triggers a real-time subscription so a client can watch availability shift without refreshing. We also built a structured JSON schema and CSV import helper so volunteers can batch ingest service directories maintained by local governments.

## Challenges

Getting every shelter to conform to the same data structure was harder than expected. Intake notes varied wildly, so we wrote transformation helpers and moderation tools to keep fields consistent. Another hurdle was encoding capacity into something actionable—beds, meal slots, and family housing all needed their own thresholds.

## What's next

We want to ship a distance-to-shelter recommendation, integrate SMS for people without smartphones, and add tighter authentication so shelters can delegate updates to on-shift managers without exposing the full database. Those roadmap items came straight from conversations on the Devpost thread and are still on our to-do list.
