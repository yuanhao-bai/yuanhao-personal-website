---
title: "Toward Autonomous Role Allocation in TinyML Sensor Swarms"
description: "Research questions and system considerations behind AutoRole-Tiny."
published: 2026-07-20
category: "Research Note"
tags: ["TinyML", "Embedded CPS", "nRF52840", "Distributed Systems"]
draft: false
---

Cloud-connected sensing systems usually assign every device a fixed task. This is simple to implement, but it becomes restrictive when the physical environment, communication quality, or available energy changes after deployment.

AutoRole-Tiny asks a different question: **can a collection of homogeneous microcontroller nodes decide which complementary roles to assume using only local computation and low-bandwidth communication?**

The project treats role allocation as an embedded systems problem rather than only an abstract optimisation problem. A useful approach must fit MCU memory and energy constraints, tolerate intermittent Bluetooth Low Energy links, and remain observable enough to debug on real hardware.

Current work focuses on three layers:

1. representing node state and role utility compactly;
2. negotiating roles without a central controller;
3. evaluating system-level behaviour on nRF52840 nodes running Zephyr RTOS.

This note will be updated as the system architecture and experiments mature.
