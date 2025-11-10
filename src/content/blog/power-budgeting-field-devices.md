---
title: Power Budgeting Field Devices
publishedAt: 2023-09-27
summary: A framework for sizing batteries, regulators, and firmware duty cycles when hardware lives off-grid.
tags:
  - power
  - low-power
  - design
previewImage: ../../assets/blog/power-budgeting-field-devices.svg
previewImageAlt: Gradient card for the power budgeting field devices article
---

Designing for the field means anticipating every milliwatt that tries to escape. I walk through the spreadsheet and testing workflow I use to model, measure, and validate power budgets.

## Checklist

- Characterize each subsystem across temperature extremes, not just room conditions.
- Implement firmware shims that simulate worst-case interrupts and telemetry bursts.
- Validate sleep currents with real instruments - bench supplies fib when measuring microamps.

## Result

Applying the process across three products extended deployments by 6-9 months and drove conversations grounded in data, not guesses.
