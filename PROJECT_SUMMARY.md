# Plearn Path — Detailed Project Summary

## 1. Overview

Plearn Path is an adaptive-learning AI tutor concept for Thai education. The current implementation is a presentation-ready MVP for JUMP THAILAND HACKATHON 2026. It demonstrates how a learner can receive questions suited to their current skill level while teachers see classroom-level learning signals and actionable next steps.

The project intentionally distinguishes between what is working in the MVP and what is only a future production architecture. This prevents the demo from overstating integrations that have not been built.

## 2. Problem and value proposition

Large classrooms make it difficult for one teacher to identify every learner's misconception in time. Learners who need more help can fall behind, while learners who have mastered a topic may wait through repetition.

Plearn Path addresses this with three connected experiences:

1. **Adaptive learner practice** — adjusts the next question from recent answers and a skill rating.
2. **Adaptive Hint** — offers a scaffolded clue rather than revealing the answer.
3. **Teacher Dashboard** — turns mastery data into a specific recommended classroom action.

## 3. Current MVP capabilities

| Area | Implemented capability |
| --- | --- |
| Landing page | Product narrative, pain point, adaptive loop, features, MVP-vs-vision architecture, AIS concept preview, and CTA |
| Student App | `/learn` provides an adaptive question, answer submission, next-question flow, path summary, and hint loading state |
| Teacher Dashboard | `/teacher` provides a mastery heatmap and a mock actionable recommendation for the next lesson |
| Adaptive engine | Session skill rating, recent-answer window, correct/incorrect streaks, prerequisite backtracking, and next-question selection |
| API contract | Next.js route handlers for health, next question, and answer submission |
| PWA support | Web app manifest, service worker for production navigation caching, and IndexedDB storage for the next cached question |
| UI | Tailwind CSS, responsive layouts, dark-mode support, Recharts progress visualization, and reduced-motion-aware scroll animation |

## 4. Product flows

### Learner flow

```text
Open /learn
  -> request a question for the demo learner
  -> answer the question
  -> score answer and update learner session
  -> decide: stay, advance, or backtrack
  -> return a safe next question without its answer key
  -> cache the next question in IndexedDB for offline continuity
```

The learner can request an Adaptive Hint. In the MVP the UI simulates a short AI typing delay and renders a static hint. This is deliberate: it demonstrates the UX without claiming a live Gemini integration.

### Teacher flow

```text
Open /teacher
  -> inspect topic mastery heatmap
  -> identify learners below mastery threshold
  -> receive a recommended remedial action for the next class
```

The current recommendation is mock data, but the product direction is to generate it from classroom patterns rather than only expose raw charts.

## 5. Adaptive-learning logic

The adaptive engine lives in `features/learning/engine/adaptive-engine.js`.

### Knowledge graph

Concepts declare their prerequisites as an adjacency list. The engine validates the graph as a DAG when it loads, preventing circular prerequisite relationships.

Example learning path:

```text
integer basics
  -> integer addition
    -> integer subtraction
      -> integer multiplication
```

### Skill rating and path decision

- Each session starts with a normalized `skillRating` of `0.5`.
- A correct answer increases the score; an incorrect answer decreases it.
- The session stores the most recent ten attempts.
- Two correct answers in a row mark the current concept as mastered and advance to the next concept.
- Two incorrect answers in a row backtrack to the nearest prerequisite.
- The next question is selected by comparing its difficulty with the current skill rating, while applying a penalty to recently answered questions.

This is an MVP-friendly, IRT-inspired heuristic rather than a full calibrated IRT model.

## 6. API contract

| Endpoint | Purpose |
| --- | --- |
| `GET /api/health` | Simple health response |
| `GET /api/students/{studentId}/next-question` | Returns the next learner-safe question |
| `POST /api/students/{studentId}/answers` | Scores an answer and returns feedback, action, skill rating, and next question |

The question answer key is removed before any question is returned to the learner client.

## 7. MVP architecture versus future vision

### Built or represented by the MVP

- Next.js App Router, React, TypeScript, and Tailwind CSS
- Recharts for progress visualization
- JavaScript adaptive engine and Next.js API routes
- Mock in-memory session state and question catalog
- PWA shell plus IndexedDB next-question cache
- PostgreSQL-ready schema at `database/schema.sql`

### Not connected yet

- PostgreSQL database connection and migrations
- Gemini API structured-output request
- Authentication, user roles, and persistent learner records
- Live teacher analytics or real-time classroom events
- AIS APIs, messaging, payments, or points systems

### Future production vision

```text
Student / Teacher apps
        |
      NGINX
        |
Go scoring service ---- Redis Cluster
        |
RabbitMQ -> Gemini workers -> PostgreSQL
        |
      Neo4j knowledge graph
```

The expected production path is to extract scoring to a Go service, use Redis for active sessions, use RabbitMQ for long-running LLM work, and introduce Neo4j only when the knowledge graph exceeds what a PostgreSQL adjacency table can comfortably handle.

## 8. AIS ecosystem position

The AIS cards on the landing page are explicitly marked as **Concept Preview — Not a live integration**. They communicate potential future fit:

- AIS 5G and Edge Computing for lower-latency interactive learning
- AIS Enterprise Cloud for data workloads
- CPaaS/SMS for teacher or parent notifications
- AIS Points and mPAY as a potential learning incentive

No AIS endpoint is called. Any future rewards model must credit a parent or guardian account rather than a child directly.

## 9. Project structure

```text
app/
  api/                         Mock Next.js API routes
  learn/                       Student App route
  teacher/                     Teacher Dashboard route
  manifest.ts                  PWA manifest
  page.tsx                     Landing page composition
components/
  landing/                     Landing-page sections
  ui/                          PWA registration and scroll animation
features/learning/
  data/                        Question catalog and typed mock data
  engine/                      DAG validation and adaptive decision rules
  offline/                     IndexedDB cache helper
  services/                    Session and scoring orchestration
database/schema.sql            PostgreSQL-ready MVP schema
public/sw.js                   Production service worker
skills/plearn-path/            Project-local Codex skill
```

## 10. Run and verification

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

Useful pages:

- `/` — landing page
- `/learn` — learner practice flow
- `/teacher` — dark-mode teacher dashboard

Run a production verification with:

```powershell
npm run build
```

## 11. Recommended next work

1. Connect the PostgreSQL schema through an ORM or database client.
2. Add authentication and teacher/student role authorization.
3. Replace mock sessions with persistent learner progress.
4. Add Gemini structured-output hints with strict answer-leakage safeguards.
5. Improve offline support by storing a short exercise queue and synchronizing submissions when online.
6. Implement teacher recommendations from real mastery thresholds and classroom attempt data.
7. Add automated unit, API, and browser tests before deployment.
