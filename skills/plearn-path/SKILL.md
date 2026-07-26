---
name: plearn-path
description: Build, redesign, or extend the Plearn Path adaptive-learning demo. Use when working on its Next.js App Router landing page, Tailwind UI sections, mock learning-path/teacher data, JavaScript API contracts, learner flows, or presentation-ready architecture content.
---

# Plearn Path

Use this skill to keep changes aligned with Plearn Path: a Thai adaptive-learning AI tutor for JUMP THAILAND HACKATHON 2026.

## Project map

- `app/page.tsx`: Compose the landing page sections.
- `components/landing/`: Landing page sections; keep each section focused and reusable.
- `components/ui/`: Shared UI behavior such as scroll animations.
- `features/learning/data/`: Typed mock learning path, student progress, and question catalog.
- `features/learning/engine/`: Adaptive-learning and DAG rules.
- `features/learning/services/`: Session orchestration and API-ready use cases.
- `app/api/`: Mock API contract for the interactive learning demo.

## Build workflow

1. Preserve Next.js App Router, TypeScript, Tailwind CSS, and Recharts.
2. Use Thai-first learner-facing copy; keep technical service identifiers in English.
3. Keep the landing page premium, legible, responsive, and presentation-friendly.
4. Add new landing-page content as a section component, then compose it in `app/page.tsx`.
5. Put demo-only content in `data/` and mark production integration boundaries with `TODO` comments.
6. Do not expose answer keys in learner-facing API responses.
7. Run `npm run build` after changes.

## Product rules

- Adapt difficulty after learner responses; move forward after mastery and revisit prerequisites after repeated errors.
- Hint content should scaffold thinking, not reveal final answers.
- Teacher views should summarize classroom patterns without exposing student data unnecessarily.
- Treat the knowledge graph as a DAG and preserve prerequisite validation.

## Production handoff

- Keep API payloads typed and stable before replacing mock routes with the Fast Scoring Engine.
- Keep Redis, Neo4j, PostgreSQL, RabbitMQ, and Gemini API integrations behind service/API boundaries.
- Keep LLM calls out of the fast scoring path.
