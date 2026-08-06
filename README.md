# Plearn Path

Plearn Path is a teacher-first web application for Thai upper-secondary classrooms. Learners complete adaptive mathematics practice, and their answers become classroom insight that helps teachers identify learning gaps and plan the next lesson. The current demonstration uses Grade 10 (M.4) functions as its sample content.

The project is designed as an end-to-end product demonstration for JUMP THAILAND HACKATHON 2026.

## The problem

In a large classroom, learners often enter a lesson with different levels of prior knowledge. A teacher must keep the class moving while also identifying students who are struggling with a prerequisite concept. Learners who need additional support can fall behind, while learners who have already mastered a topic may spend time repeating material that is no longer useful.

Plearn Path addresses this gap by connecting learner practice with teacher-facing insight. Learner practice is the source of evidence; the teacher-facing dashboard is the primary decision-making surface.

## Product experience

### Teacher experience

The `/teacher` route represents a Grade 10 class and displays a mastery heatmap plus one recommended intervention for the next lesson. Its data is intentionally fixed demo data in the current MVP; it is not yet linked to live learner submissions.

### Learner experience

The learner opens `/learn` and receives a mathematics question from the current concept. The current learning path contains:

```text
Function basics
  → Linear functions
    → Quadratic functions
      → Introductory calculus
```

For each question, the learner can:

1. Submit an answer.
2. Receive immediate correctness feedback.
3. Request an Adaptive Hint that explains the next reasoning step without revealing the final answer.
4. Receive the next question selected for the learner's current concept and estimated ability.

The learner-facing API never returns the answer key with a question. This keeps answer validation on the server-side service layer and allows the UI to remain focused on practice.

### Adaptive learning flow

The adaptive loop is driven by a small prerequisite graph and a session state:

1. A session starts at `functions_basics` with a normalized skill rating of `0.5`.
2. Each answer is recorded with its concept, correctness, and duration.
3. Correct answers increase the rating; incorrect answers decrease it.
4. Two correct answers in sequence advance the learner to the next concept.
5. Repeated incorrect answers move the learner back to a prerequisite concept when one exists.
6. The question selector chooses an exercise whose difficulty is closest to the current rating.

This creates a transparent, deterministic adaptive loop that is easy to demonstrate, inspect, and extend.

## Architecture and data flow

```text
Browser
  ├─ Landing page (/)
  ├─ Learner practice (/learn)
  └─ Teacher dashboard (/teacher)
          │
          ▼
Next.js Route Handlers
  ├─ GET  /api/students/:studentId/next-question
  └─ POST /api/students/:studentId/answers
          │
          ▼
Learning Service
  ├─ In-memory learner session
  ├─ Adaptive engine
  └─ Learner-safe question response
          │
          ▼
Question catalog and prerequisite graph
```

The learning service creates an in-memory session for each learner identifier. It receives answer submissions, calls the adaptive engine, updates the session state, and returns feedback plus the next learner-safe question. The question catalog stores the concept identifier, difficulty, prompt, answer key, and hint for each exercise.

## Project structure

```text
app/
  page.tsx                                  Landing page
  learn/page.tsx                            Learner practice experience
  teacher/page.tsx                          Teacher dashboard
  api/students/[studentId]/next-question/   Next-question endpoint
  api/students/[studentId]/answers/         Answer-submission endpoint

components/
  landing/                                  Landing-page sections and UI blocks
  learning/                                 Question card and learning-path sidebar
  teacher/                                  Heatmap and recommended-action card
  ui/                                       Shared interaction components

features/learning/
  data/catalog.js                           Questions, hints, difficulty, and graph data
  data/mock-learning-data.ts                Learning-path and teacher-dashboard data
  engine/adaptive-engine.js                 Progression, backtracking, and selection rules
  services/learning-service.js              Session and scoring orchestration
```

## Technology stack

| Technology | Purpose | Why it is used |
| --- | --- | --- |
| Next.js 16 App Router | Application framework and API routes | Keeps the website, learner routes, and server-side demo endpoints in one deployable codebase. |
| React 19 | Interactive user interface | Handles learner input, hint visibility, dashboard confirmation state, and reusable UI components. |
| TypeScript | Frontend component development | Adds type checking for React component props and structured dashboard data. |
| JavaScript | Adaptive engine and service layer | Keeps the learning-rule prototype direct and easy to inspect while preserving simple server-side modules. |
| Tailwind CSS | Styling and responsive layout | Makes it fast to build a consistent white, purple, and lavender interface with responsive grids and readable form controls. |
| Recharts | Learning-progress visualisation | Provides the progress chart used in the landing-page teacher-dashboard preview. |
| ESLint + Next.js build tooling | Code quality and validation | Detects common errors and verifies that routes compile successfully before delivery. |

## Running locally

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful routes:

- `/` — landing page
- `/learn` — learner practice flow
- `/teacher` — teacher dashboard
- `/api/health` — health-check endpoint

## Quality checks

```powershell
npm run lint
npm run build
```

## Future development

Plearn Path can evolve from its current adaptive-learning foundation in several directions:

1. **Persistent learner data** — add authentication, a production database, and durable learner progress across devices and classes.
2. **Teacher workflows** — allow teachers to create activities, assign practice sets, review answer history, and track improvement over time.
3. **Broader curriculum coverage** — expand from M.4 functions into additional mathematics topics, other grades, and other subjects while retaining the prerequisite-graph model.
4. **AI-assisted hints** — generate pedagogically constrained hints that follow a concept-specific rubric, validate their output, and keep answer disclosure under strict control.
5. **Data-driven recommendations** — calculate recommended teacher interventions from real classroom attempts, concept thresholds, and learning trends.
6. **Accessibility and inclusion** — add screen-reader support, adjustable typography, multilingual content, and learning modes for diverse learner needs.
7. **School-scale operations** — introduce role-based access, privacy controls, audit trails, observability, and analytics appropriate for student data.

The central principle remains the same: use learner evidence to make the next learning step clearer for both the learner and the teacher.
