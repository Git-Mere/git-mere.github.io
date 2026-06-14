---
date: 2026-04-19
featuredOrder: 1
title: Settle Up
cover: ./cover.png
github: https://github.com/Git-Mere/Settle_Up
tech:
  - C#
  - .NET 8
  - ASP.NET Core
  - Discord.Net
  - Azure
  - OpenTelemetry
  - Docker
---

Splitting a shared receipt among a group is tedious when the bill arrives as a photo and participants are scattered across a chat app. Settle Up connects a Discord bot to a distributed Azure backend: users upload a receipt image, Azure Event Grid triggers a dedicated parsing service that calls Azure Document Intelligence, and the normalized draft is delivered back to the Discord-facing service via HTTP callback. The Discord UI then lets each participant assign line items, with session-scoped serialization and debounced message updates keeping the shared view consistent under concurrent interactions, before the owner confirms and the final settlement is persisted to Cosmos DB.
