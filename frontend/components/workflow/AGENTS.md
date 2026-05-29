# Mausam AI Creator Studio — AGENTS.md

# Project Goal

Build a professional AI Creator Platform using:

- Next.js Frontend
- Node.js Backend
- Modular AI Provider Architecture
- Workflow Automation System
- Multi-Generation Pipelines
- Future Public/Open Source Release

---

# Core Architecture

## Managers
- Queue Manager
- History Manager
- Library Manager
- Project Manager

## Pipelines
- Image Pipeline
- Video Pipeline
- Voice Pipeline
- Music Pipeline

## Layers
- UI Layer
- API Layer
- Service Layer
- Router Layer
- Provider Layer
- Workflow Layer

---

# Current Priority

1. Stabilize Workflow Studio
2. Stabilize ReactFlow Integration
3. Connect Video Pipeline Into Workflow
4. Workflow Save/Load System
5. Backend Persistence
6. Deployment Preparation

---

# Official Development Rules

## Rule 1 — Never Blind Edit

Before editing:
- identify file
- identify exact section
- explain expected result

---

## Rule 2 — Safe Edit Format

All edits must follow:

1. File path
2. Exact code block to find
3. BEFORE preview
4. AFTER preview
5. Final expected result

---

## Rule 3 — One Step At A Time

Never modify:
- multiple large systems together
- multiple workflow states together
- multiple ReactFlow systems together

One stable step only.

---

## Rule 4 — Validate Before Continue

Before moving forward:
- TypeScript must compile
- browser must load
- ReactFlow must render
- no duplicate hooks
- no runtime crash

---

## Rule 5 — Git Safety

Before major edits:

```bash
git add .
git commit -m "checkpoint"