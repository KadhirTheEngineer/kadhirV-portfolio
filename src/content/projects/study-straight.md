---
title: StudyStraight
publishedAt: 2025-03-01
description: Wearable posture coach that detects slouching and guides study breaks in real time.
tech:
  - IMU
  - Edge Impulse
  - STM32
  - BLE
  - C
featured: false
previewImage: ../../assets/projects/study-straight.svg
previewImageAlt: Gradient card for the StudyStraight wearable posture coach
---

## Summary

StudyStraight is a low-cost wearable that monitors posture with onboard processing, alerting students when it detects slouching during study sessions.

## Highlights

- Designed an embedded system with IMUs that capture upper-body angles and run a 2D Kalman filter for real-time orientation estimates.
- Trained a 99.3% accurate neural network using Edge Impulse to classify slouching patterns and support both manual and automatic recalibration flows.
- Implemented C firmware that streams data over BLE to an ESP32 hub, enabling interrupt-driven study timers and notifications.

## Outcome

The project earned 3rd place at the IEEE Techathon, validating the blend of embedded sensing and applied machine learning in a student-facing tool.
