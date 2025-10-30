---
title: Smart Grid Energy Monitor
publishedAt: 2024-04-15
description: Real-time energy monitoring node for microgrid analytics with field-ready firmware and dashboards.
tech:
  - ESP32
  - Modbus
  - Grafana
  - MQTT
featured: true
links:
  source: https://github.com/example/smart-grid-monitor
  live: https://example.com/microgrid
---

## Summary

I designed a distributed metering platform to capture voltage, current, and power quality metrics across a campus microgrid. The hardware pairs isolated sensors with an ESP32 module and streams aggregated metrics to an MQTT broker.

## Highlights

- 4-layer PCB with reinforced creepage, isolated ADC front-end, and pluggable CT inputs.
- Deterministic firmware built on ESP-IDF with hardware timers and brownout recovery.
- Secure OTA pipeline and encrypted telemetry routed to a Grafana stack for visualization.

## Outcome

The fleet of nodes has logged >1 billion samples with 99.95% uptime, enabling predictive maintenance alerts that prevented two transformer overload events. The design is production-ready and has since been adapted for remote solar sites.
