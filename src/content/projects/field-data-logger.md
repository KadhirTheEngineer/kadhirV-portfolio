---
title: Rugged Field Data Logger
publishedAt: 2022-08-19
description: Battery-optimized environmental data logger with LTE backhaul and over-the-air updates.
tech:
  - Nordic nRF9160
  - LTE-M
  - Low-power design
  - Rust
links:
  source: https://github.com/example/rugged-data-logger
---

## Summary

I led the electronics and firmware roadmap for a harsh-environment data logger capturing temperature, humidity, vibration, and soil moisture for agricultural deployments.

## Highlights

- Multi-year operation on a single Li-SOCl2 cell via aggressive power budgeting and Rust firmware.
- Telemetry buffering and lossless retransmit over LTE-M with AWS IoT integration.
- Modular sensor backplane supporting hot-swappable daughtercards.

## Outcome

The platform is deployed across 14 sites collecting agronomic insights that inform irrigation schedules and fertilizer usage, reducing water consumption by 24%.
