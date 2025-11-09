---
title: OASYS (Optimization of Airfoil SYStems)
publishedAt: 2020-11-08
description: Desktop design tool that optimizes airfoil geometry by sweeping aerodynamic parameters.
tech:
  - Python
  - PyQt5
  - XFoil
featured: false
links:
  source: https://github.com/dch777/OASYS
---

## Summary

OASYS lets users tune camber, thickness, and chord parameters while visualizing the resulting airfoil profile and predicted lift/drag performance.

## Highlights

- Wrapped XFoil calculations in a Python analytics module to evaluate candidate airfoils as parameters update.
- Built a PyQt5 interface with live plotting, presets, and export options so teammates could iterate without touching code.
- Automated unit conversions and guardrails that keep user inputs in physically valid ranges, preventing solver crashes.

## Outcome

Won Best Aviation Hack at hackTAMS 2020 by bringing aircraft design math to an accessible, student-friendly tool.
