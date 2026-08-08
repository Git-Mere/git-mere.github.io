---
date: 2026-05-25
title: Post Connector
github: https://github.com/Git-Mere/Post-Connector
tech:
  - TypeScript
  - Claude Agent SDK
  - Octokit
  - Zod
company: ''
showInProjects: true
---

A local CLI that reads a GitHub repository and generates platform-specific content (README, portfolio entries, LinkedIn posts) via Claude, then opens a pull request where publishing can be automated. Adapters are isolated folders with their own instructions and Zod-validated schemas, so adding a new platform requires no changes to the core pipeline.
