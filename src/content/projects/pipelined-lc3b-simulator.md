---
title: Pipelined Cycle-Accurate LC-3b Simulator
publishedAt: 2024-10-01
description: Cycle-accurate LC-3b ISA simulator with five-stage pipeline modeling and branch prediction.
tech:
  - C
  - Computer Architecture
  - Simulation
featured: false
previewImage: ../../assets/projects/pipelined-lc3b-simulator.svg
previewImageAlt: Gradient card for the LC-3b pipeline simulator project
---

## Summary

I built a cycle-accurate simulator for the LC-3b ISA that mirrors the microarchitecture taught in class, enabling detailed performance analysis of student programs.

## Highlights

- Modeled instruction execution across fetch, decode, address generation, memory, and write-back stages with full hazard tracking.
- Implemented a 2-bit saturating branch predictor to adapt to control flow history and reduce pipeline stalls.
- Crafted debugging visualizations for pipeline state that made it easier to compare simulator output against hardware expectations.

## Outcome

The simulator provides fast feedback loops for architecture labs, helping peers reason about pipeline behavior and optimization opportunities.
