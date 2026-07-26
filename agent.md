# Plearn Path — Project Agent Guide

## Product context

Plearn Path is an adaptive AI tutor for Thai education, designed for JUMP THAILAND HACKATHON 2026. It personalizes each learner's path, provides hints without giving away answers, and gives teachers a real-time view of class-wide learning gaps.

## Product outcomes

- Start with a pre-test to establish a learner baseline.
- Represent lesson concepts and prerequisites as a directed acyclic graph (DAG).
- Adjust difficulty continuously from recent answers and skill estimates.
- Advance learners who demonstrate mastery; return learners with repeated errors to prerequisite concepts.
- Generate individualized, progressive hints rather than direct answers.
- Surface real-time class and individual weak points in the teacher dashboard.

## Intended architecture

```text
Next.js student PWA + teacher dashboard
              |
        NGINX gateway
        /             \
Fast scoring path    Async AI path
FastAPI or Go        RabbitMQ -> LLM workers -> PostgreSQL
Redis session state  Gemini structured JSON
              |
            Neo4j knowledge graph
```

### Core services and responsibilities

| Component | Responsibility |
| --- | --- |
| Next.js + Tailwind | Student learning experience and teacher dashboard |
| FastAPI or Go | Low-latency scoring, session updates, and next-question selection |
| Redis | Active learner session and short sliding-window response history |
| Neo4j | Knowledge graph, prerequisites, and learning-path traversal |
| PostgreSQL | Users, attempts, durable progress, analytics, and transactions |
| RabbitMQ | Decouple slow LLM generation from the interactive request path |
| Gemini API | Strict structured output for hints and learning analysis |

## Adaptive-learning rules

- The synchronous scoring path should target a response time below 50 ms. Do not place LLM calls on this path.
- Keep the last 5–10 answers in a circular buffer/sliding window to detect short-term performance trends.
- Use a min-heap or priority queue to select the best next exercise in `O(log N)`.
- Treat the knowledge graph as a DAG: validate that content changes do not introduce cycles.
- On a strong run of correct answers, raise difficulty or bypass already-mastered repetition.
- On repeated errors, lower complexity and traverse prerequisite concepts before retrying the target skill.
- Hint output must be pedagogical: give a clue, scaffold a next step, and avoid revealing the final answer.

## Implementation conventions

- Prefer TypeScript for frontend code and typed request/response contracts across services.
- Keep API payloads versioned and validate all external/LLM output against a schema before use.
- Design UI copy and learning content for Thai learners; support Thai first while keeping technical identifiers in English.
- Make state transitions explicit and idempotent, especially for answer submissions and queue consumers.
- Record enough audit data to explain why a recommendation, difficulty change, or backtrack occurred.
- Do not store secrets in source control. Use environment variables and provide safe `.env.example` placeholders only.
- Protect student data: collect the minimum necessary, enforce role-based access for teacher views, and never expose one student's data to another student.

## Quality checks before completion

- Run applicable linting, type checking, unit tests, and production build steps.
- Verify that a correct-answer streak progresses the path and repeated mistakes backtrack to prerequisites.
- Verify LLM failure or queue delay never blocks the core question/answer experience.
- Verify teacher analytics are aggregated correctly and access-controlled.
- Preserve accessibility: keyboard navigation, readable contrast, clear feedback, and mobile-first layouts.

## Out of scope for an MVP

- Full production deployment of every infrastructure component.
- Automated parent notifications, points payments, and subscriptions; keep these behind clearly isolated integrations.

