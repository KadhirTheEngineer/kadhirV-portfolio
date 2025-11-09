---
title: eProctor
publishedAt: 2021-06-27
description: Desktop assistant that transcribes class discussions and flags abusive language in virtual classrooms.
tech:
  - Python
  - PyQt5
  - PyAudio
  - Firebase
  - CSS
featured: false
links:
  source: https://github.com/KadhirV/Eproctor
---

## Summary

eProctor records classroom audio, transcribes conversations, and surfaces offensive phrases so teachers can intervene quickly during remote instruction.

## Highlights

- Built a PyQt5 desktop client with threaded audio capture so speech-to-text runs continuously without freezing the UI.
- Integrated Google Translate’s speech recognition and a custom profanity classifier to detect harassment in near real time.
- Logged incidents to Firebase with contextual timestamps, giving educators a lightweight audit trail and escalation workflow.

## Outcome

Took 1st Place at TeenHacksLI Spring 2021 for addressing online classroom safety during the pandemic.
