---
title: Street Fighter on TI MSPM0+
publishedAt: 2024-04-01
description: Retro Street Fighter port engineered to run smoothly on the TI MSPM0+ microcontroller.
tech:
  - ARM Assembly
  - C
  - MSPM0+
  - UART
  - Embedded Graphics
featured: false
---

## Summary

I re-created a Street Fighter-style game for the MSPM0+ platform, squeezing arcade responsiveness out of resource-constrained hardware.

## Highlights

- Wrote game logic in ARM assembly and C tailored to the MSPM0+ architecture for deterministic timing.
- Optimized frame rendering with lookup tables, boosting average FPS by 500%.
- Implemented a full-duplex UART link to a companion microcontroller that generates game audio through a 5-bit DAC.

## Outcome

The project demonstrates how tight control over memory, timing, and peripherals can unlock complex gameplay on modest microcontrollers.
