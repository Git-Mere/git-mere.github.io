---
date: 2026-06-09
title: Settle Up
cover: ./cover.png
github: https://github.com/Git-Mere/Settle_Up
tech:
  - C#
  - .NET
  - ASP.NET Core
  - Discord.Net
  - Azure Blob Storage
  - Azure Event Grid
  - Azure Cosmos DB
  - Azure Document Intelligence
  - Azure Container Apps
  - OpenTelemetry
---

Splitting a shared receipt requires parsing unstructured image data, coordinating multiple participants in real time, and keeping a shared UI consistent without spamming a channel. Settle Up solves this by wiring a Discord bot to an event-driven backend: receipt images are uploaded through Discord, Azure Event Grid triggers a dedicated parser service that extracts structured line items via Azure Document Intelligence, and the parsed draft is delivered back to the bot over HTTP for collaborative item assignment. Session-scoped state serialization, per-session debouncing, and owner-restricted actions keep the public Discord message stable under concurrent interactions, while confirmed settlements are persisted to Cosmos DB for later history lookup.
