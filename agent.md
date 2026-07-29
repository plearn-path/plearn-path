# Plearn Path — MVP Agent Guide

## Product scope

Plearn Path is a 3-day MVP for JUMP THAILAND HACKATHON 2026. It focuses on Thai upper-secondary mathematics: a Grade 10 (M.4) learner practising linear functions.

The demo proves one product loop:

```text
Student answers a question
  -> rule-based logic selects the next appropriate question
  -> student can reveal a non-answer hint
  -> teacher sees class mastery and one recommended action
```

## What is implemented

- `/learn`: adaptive practice for function basics, linear functions, and quadratic functions.
- `/teacher`: static demo dashboard for class M.4/1 with a 3-student × 2-skill heatmap.
- `features/learning/data/catalog.js`: question bank, answers, hints, difficulty, prerequisite graph, and next-concept map.
- `features/learning/engine/adaptive-engine.js`: session rating, correct/incorrect streak handling, progression, and prerequisite backtracking.
- `features/learning/services/learning-service.js`: in-memory demo sessions and learner-safe API responses.
- Next.js API routes for the next question and answer submission.

## Adaptive-learning rules

- Start each demo session at `functions_basics` with `skillRating: 0.5`.
- Two correct answers advance the learner to the next concept.
- Repeated incorrect answers backtrack to the prerequisite concept when one exists.
- Never include an answer key in the question returned to the learner.
- Hints come from the question bank and must guide the next step without directly giving the answer.

## Implementation conventions

- Use TypeScript for React components and JavaScript for the current learning engine and mock API services.
- Keep the product focused on M.4 mathematics; do not introduce additional grades, subjects, authentication, or persistence unless explicitly requested.
- Prefer small presentational components imported into route pages instead of large JSX returns.
- Keep UI dark by default and preserve readable contrast, keyboard input, and responsive layouts.
- Treat the Teacher Dashboard data as mock data unless a real data source is explicitly added.

## Explicitly out of scope

- Authentication, user accounts, role-based access, and a production database.
- PWA/offline functionality, service workers, and IndexedDB.
- Gemini/LLM calls, generated hints, and real-time analytics.
- AIS integrations, SMS, points, payments, or parent notifications.
- Production infrastructure such as FastAPI/Go services, NGINX, Redis, RabbitMQ, PostgreSQL, or Neo4j.

## Quality checks

- Run `npm run lint` and `npm run build` after code changes.
- Verify correct answers progress the learning path and incorrect answers provide useful feedback.
- Verify the learner flow and Teacher Dashboard use the same M.4 mathematics concepts.
