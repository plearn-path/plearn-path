# Plearn Path

Plearn Path is an adaptive-learning AI tutor for Thai education, created as a presentation-ready demo for JUMP THAILAND HACKATHON 2026.

## Stack

- Next.js App Router + React + TypeScript
- Tailwind CSS
- Recharts
- Mock API routes and JavaScript adaptive-learning logic

## Run locally

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```text
app/                      Pages, global styles, and mock API routes
components/landing/        Reusable landing page sections
components/ui/             Shared UI interactions, including scroll animation
features/learning/data/    Typed demo data and question catalog
features/learning/engine/  Adaptive-learning and DAG rules
features/learning/services/ Session orchestration and API-ready use cases
skills/plearn-path/        Reusable Codex skill for this project
```

## Demo boundaries

The landing page and API routes use mock data. Replace the mock API/service boundaries with the Fast Scoring Engine, Redis, Neo4j, PostgreSQL, RabbitMQ, and Gemini API for production. Keep LLM work asynchronous and never return answer keys in learner-facing responses.

## Checks

```powershell
npm run build
```
