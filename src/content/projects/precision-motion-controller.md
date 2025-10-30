---
title: Precision Motion Controller
publishedAt: 2023-11-02
description: Closed-loop motion controller for a custom wafer inspection rig with nanometer positioning feedback.
tech:
  - STM32
  - FPGA
  - CANOpen
  - Python
featured: true
links:
  source: https://github.com/example/precision-motion-controller
---

## Summary

Working with the mechanical team, I architected the electronics for a wafer inspection tool requiring sub-micron motion. The design combines an STM32 microcontroller with an FPGA co-processor to handle deterministic trajectory generation and error correction.

## Highlights

- Dual-channel servo drive with 20-bit encoder feedback and real-time phase alignment.
- FPGA-based jerk-limited motion profiles streamed to the MCU over a lightweight protocol.
- Diagnostics surface via a CANOpen service channel and a Python calibration utility.

## Outcome

The system meets +/-4 nm repeatability across the travel range and slashed calibration time from 3 hours to 25 minutes. The architecture is now the reference design for the next generation platform.
