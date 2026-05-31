# Mausam AI Creator Studio Architecture

## Project Structure

Creator-Studio AI

Backend/
Docs/
Models/
Reference-Projects/

frontend/

app/
components/
exports/
lib/

config/
core/
providers/
audio/
images/
music/
videos/
services/
store/
types/
workflows/

public/

---

## Architecture Pattern

UI
↓
API
↓
Service
↓
Router
↓
Provider

---

## Core Managers

Queue Manager
History Manager
Library Manager
Project Manager

---

## Generation Pipelines

### Image

Image Studio
↓
Generate Image API
↓
Image Service
↓
Image Router
↓
Provider

### Video

Video Studio
↓
Generate Video API
↓
Video Service
↓
Video Router
↓
Provider

### Voice

Voice Studio
↓
Generate Voice API
↓
Voice Service
↓
Voice Router
↓
Provider

### Music

Music Studio
↓
Generate Music API
↓
Music Service
↓
Music Router
↓
Provider

---

## Workflow System

Workflow Studio
↓
Workflow Runner
↓
Workflow API
↓
Workflow Executor
↓
Generators

Current:

Topic
↓
Workflow
↓
Image
↓
Voice

Next:

Topic
↓
Workflow
↓
Image
↓
Voice
↓
Video
↓
Project
↓
Library
↓
History

---

## Working Providers

Images:
- OpenAI

Voice:
- OpenAI TTS

Videos:
- Kling (tested)

Music:
- Architecture ready

---

## Development Principles

- Modular
- Scalable
- Open-source ready
- Provider agnostic
- UI independent
- Complete file responses preferred
- Test before connecting expensive providers