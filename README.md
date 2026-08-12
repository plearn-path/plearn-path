# Plearn Path

Plearn Path is a teacher-first, data-driven web application for Thai upper-secondary classrooms. It turns learner answers from adaptive mathematics practice into information that helps educators understand learning gaps and plan more targeted instruction.

The current prototype demonstrates Grade 10 (M.4) mathematics, using functions as the sample subject area. It is an end-to-end product demonstration for JUMP THAILAND HACKATHON 2026.

## Problem background

Learners in the same classroom have different foundations, learning speeds, and points of confusion. However, conventional teaching often gives every learner the same content and practice set. Some learners may fall behind, while others may not feel sufficiently challenged.

Teachers also have limited time to identify individual learning gaps. Plearn Path addresses this by adapting questions and hints to learner answers, then presenting the resulting learning evidence in a teacher-facing dashboard.

## Target users

The primary users are teachers, lecturers, and tutors of all genders, aged approximately 18–49, who teach upper-secondary students in Thailand. This includes educators in public schools, private schools, and tutoring institutions who use digital tools to prepare lessons and want clearer evidence of which concepts each learner understands or finds difficult.

Learners are the secondary users. They complete practice questions, creating the learning evidence that educators use to improve instruction.

## Solution

Plearn Path provides two connected product perspectives:

- **Learner practice:** learners answer mathematics questions, receive immediate feedback, and can request a step-by-step hint without receiving the final answer directly.
- **Teacher Dashboard:** educators can review topic-level mastery and a suggested follow-up action for the next lesson.

The platform is designed around a simple principle: **every learner answer can become useful information for better teaching.**

## Current prototype scope

### Learner experience

The `/learn` route demonstrates an adaptive practice flow for functions:

```text
Function basics
  → Linear functions
    → Quadratic functions
      → Introductory calculus
```

For each question, a learner can:

1. Submit an answer by button or by pressing Enter.
2. Receive immediate correctness feedback.
3. Request an Adaptive Hint that guides the next reasoning step.
4. Receive a next question selected from the learner's current concept and estimated ability.

The learner-facing API never sends the answer key to the browser.

### Teacher experience

The `/teacher` route demonstrates a Grade 10 classroom dashboard with a mastery heatmap and a recommended intervention for the next lesson.

**Important:** the Teacher Dashboard currently uses fixed demo data. It is not yet connected to live learner submissions from `/learn`; connecting learner attempts to classroom-level dashboard data is a future development step.

## Adaptive-learning logic

The prototype uses a transparent, rule-based prerequisite graph and in-memory learner session:

1. A learner starts at `functions_basics` with a normalized skill rating of `0.5`.
2. Each answer records its concept, correctness, and duration.
3. Correct answers increase the rating; incorrect answers decrease it.
4. Two correct answers in sequence advance the learner to the next concept.
5. Repeated incorrect answers move the learner back to a prerequisite concept when one exists.
6. The question selector chooses an exercise whose difficulty is closest to the learner's current rating.

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

## Project structure

```text
app/
  page.tsx                                  Landing page
  learn/page.tsx                            Learner practice experience
  teacher/page.tsx                          Teacher Dashboard
  api/students/[studentId]/next-question/   Next-question endpoint
  api/students/[studentId]/answers/         Answer-submission endpoint

components/
  landing/                                  Landing-page sections and UI blocks
  learning/                                 Question card and learning-path sidebar
  teacher/                                  Heatmap and recommended-action card
  ui/                                       Shared interaction components

features/learning/
  data/catalog.js                           Questions, hints, difficulty, and graph data
  data/mock-learning-data.ts                Demo learning-path and dashboard data
  engine/adaptive-engine.js                 Progression, backtracking, and selection rules
  services/learning-service.js              Session and scoring orchestration
```

## Technology stack

| Technology | Purpose |
| --- | --- |
| Next.js 16 App Router | Web application framework and API routes |
| React 19 | Interactive learner and teacher interfaces |
| TypeScript | Type-safe React components and dashboard data |
| JavaScript | Adaptive-learning engine and service layer |
| Tailwind CSS | Responsive white, purple, and lavender interface |
| Recharts | Learning-progress chart visualisation |

## Expected results and future impact

Plearn Path is expected to help educators identify learner strengths, weaknesses, and concepts that need additional instruction. This evidence can support more targeted remedial teaching and better activity choices for the next lesson, while helping learners receive support appropriate to their current understanding.

Future development can extend the prototype by:

1. Connecting live learner attempts to the Teacher Dashboard.
2. Adding user accounts and a database for durable learner and classroom records.
3. Expanding from M.4 mathematics to more upper-secondary subjects and grade levels.
4. Adding teacher workflows for assigning practice, reviewing history, and tracking progress.
5. Introducing pedagogically constrained AI-assisted hints after appropriate validation and privacy controls are in place.

## Running locally

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful routes:

- `/` — landing page
- `/learn` — learner practice flow
- `/teacher` — Teacher Dashboard demo
- `/api/health` — health-check endpoint

## Quality checks

```powershell
npm run lint
npm run build
```
