---
title: Custom Ergonomic Split Mechanical Keyboard (RP2040)
publishedAt: 2025-01-18
description: High-performance split keyboard with OLED feedback, rotary encoders, and on-device autocorrect.
tech:
  - RP2040
  - C
  - OLED
  - Rotary Encoders
  - Firmware Architecture
featured: true
previewImage: ../../assets/projects/KLOR2.png
previewImageAlt: RP2040 split keyboard build
---

## Summary
This project started as an intro to split keyboards. I found an <u>[open source design](https://github.com/GEIGEIGEIST/KLOR)</u> I really liked, understood how everything worked, made some small tweaks to suit my needs better. This Keyboard was my daily driver till it got replaced by my fully custom Kaboard V2.

## Firmware

I used <u>[KMK](https://github.com/KMKfw/kmk_firmware)</u>, a keyboard firmware framework based on circuitPython. I wanted a keyboard that was rich in features, and was easier to configure than typical ZMK or other C based alternatives. This firmware helped me learn a lot about keyboard software- going from a diode matrix to a serial USB output to your computer. This firmware also shipped stock with functions like HoldTap, making your 42-key keyboard a whole lot more powerful than what meets the eye.

## Highlights

- Engineered RP2040-based keybaord that integrate OLED displays and rotary encoders for real-time control.
- Built multi-layer firmware with programmable macros and custom drivers for display updates and mouse emulation.
- Implemented an on-device autocorrect engine using a tree-based data structure to infer words from keypress patterns and correct typos on the fly.

## Gallery
![KLOR1](../../assets/projects/KLOR1.png)

## Outcome

One of my most useful projects, and I use it every single day. It sits in my lab at work, and its an amazing conversation starter. 
