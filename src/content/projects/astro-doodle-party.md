---
title: AstroDoodle.party
publishedAt: 2025-10-19
description: HackTX-winning, motion-controlled browser game inspired by classic Google Doodles.
tech:
  - TypeScript
  - Phaser 3
  - OpenCV
  - Python
  - Computer Vision
  - 3D Printing
featured: true
links:
  live: https://astrodoodle.party
  source: https://github.com/gjkeller/astrodoodle
---

## Summary

AstroDoodle.party reimagines arcade doodle games with physical LED wands that translate real-world gestures into on-screen action through a custom vision pipeline.

## Highlights

- Designed custom 3D-printed wands with onboard LEDs, batteries, and triggers so players can cast spells in the air while the webcam tracks their motion.
- Built an OpenCV pipeline with tap-to-calibrate color sampling, adaptive exposure handling, and dual-mask tracking to stream point-cloud gestures into gameplay.
- Integrated the $Q Super-Quick Recognizer with a Phaser 3 TypeScript engine to translate gestures into spell combos with low-latency feedback.

## Outcome

The project won 1st Place Overall and Best Design at HackTX 2025 (out of 225+ submissions) after a 24-hour build, highlighting the team’s end-to-end rapid prototyping skills.
