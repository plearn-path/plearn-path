# Plearn Path — MVP Agent Guide

## Product scope

Plearn Path is a 3-day MVP for JUMP THAILAND HACKATHON 2026. It is teacher-first for Thai upper-secondary classrooms; the current demo uses Grade 10 (M.4) mathematics practice as its learner-data source.

The demo proves one product loop:

```text
Student answers a question
  -> rule-based logic selects the next appropriate question
  -> student can reveal a non-answer hint
  -> teacher sees fixed demo mastery data and one recommended action
```

## What is implemented

- `/learn`: adaptive practice for function basics, linear functions, and quadratic functions.
- `/teacher`: static demo dashboard for class M.4/1 with a 3-student × 2-skill heatmap.
- `features/learning/data/catalog.js`: question bank, answers, hints, difficulty, prerequisite graph, and next-concept map.
- `features/learning/engine/adaptive-engine.js`: session rating, correct/incorrect streak handling, progression, and prerequisite backtracking.
- `features/learning/services/learning-service.js`: in-memory demo sessions and learner-safe API responses.
- Next.js API routes for the next question and answer submission.
- The Teacher Dashboard currently uses fixed demo data and is not linked to live learner submissions.

## Adaptive-learning rules

- Start each demo session at `functions_basics` with `skillRating: 0.5`.
- Two correct answers advance the learner to the next concept.
- Repeated incorrect answers backtrack to the prerequisite concept when one exists.
- Never include an answer key in the question returned to the learner.
- Hints come from the question bank and must guide the next step without directly giving the answer.

## Implementation conventions

- Use TypeScript for React components and JavaScript for the current learning engine and mock API services.
- Keep the current demo focused on M.4 mathematics while presenting the product as suitable for upper-secondary teachers; do not introduce additional grades, subjects, authentication, or persistence unless explicitly requested.
- Prefer small presentational components imported into route pages instead of large JSX returns.
- Do not write long one-line JSX, functions, or conditionals. Break complex markup and logic into readable multi-line blocks; extract a component when a block becomes difficult to scan.
- Follow the white, purple, and lavender visual system in DESIGN.md; preserve readable contrast, keyboard input, and responsive layouts.
- Treat the Teacher Dashboard data as mock data unless a real data source is explicitly added.

## Explicitly out of scope

- Authentication, user accounts, role-based access, and a production database.
- Gemini/LLM calls, generated hints, and real-time analytics.
- AIS integrations, SMS, points, payments, or parent notifications.
- Production infrastructure such as FastAPI/Go services, NGINX, Redis, RabbitMQ, PostgreSQL, or Neo4j.

## Quality checks

- Run `npm run lint` and `npm run build` after code changes.
- Verify correct answers progress the learning path and incorrect answers provide useful feedback.
- Verify the learner flow and Teacher Dashboard use the same M.4 mathematics concepts.
