import { nextConcept, prerequisites } from "../data/catalog";

export function validateDag(graph) {
  const visiting = new Set();
  const visited = new Set();
  const visit = (concept) => {
    if (visiting.has(concept)) throw new Error(`Prerequisite cycle found at '${concept}'`);
    if (visited.has(concept)) return;
    visiting.add(concept);
    for (const prerequisite of graph[concept] ?? []) {
      if (!(prerequisite in graph)) throw new Error(`Unknown prerequisite '${prerequisite}'`);
      visit(prerequisite);
    }
    visiting.delete(concept);
    visited.add(concept);
  };
  Object.keys(graph).forEach(visit);
}

function streak(attempts, isCorrect) {
  let count = 0;
  for (const attempt of [...attempts].reverse()) {
    if (attempt.isCorrect !== isCorrect) break;
    count += 1;
  }
  return count;
}

export function recordAttempt(session, attempt) {
  const evidenceWeight = 1 + 0.35 * Math.abs(session.skillRating - 0.5);
  const delta = (attempt.isCorrect ? 0.1 : -0.12) * evidenceWeight;
  session.skillRating = Math.max(0, Math.min(1, Number((session.skillRating + delta).toFixed(3))));
  session.recentAttempts = [...session.recentAttempts, attempt].slice(-10);
  if (streak(session.recentAttempts, true) >= 2) {
    session.masteredConcepts.add(session.currentConceptId);
    return "advance";
  }
  return streak(session.recentAttempts, false) >= 2 ? "backtrack" : "stay";
}

export function moveToTargetConcept(session, action) {
  const current = session.currentConceptId;
  if (action === "advance") session.currentConceptId = nextConcept[current] ?? current;
  if (action === "backtrack") session.currentConceptId = prerequisites[current]?.[0] ?? current;
  return session.currentConceptId;
}

export function chooseNextQuestion(session, questions, conceptId) {
  // Sorting an MVP-sized queue has the same selection semantics as a min-heap.
  // Replace this with a persistent priority queue when the question catalog grows.
  const answeredIds = new Set(session.recentAttempts.map((attempt) => attempt.questionId));
  const candidates = questions
    .filter((question) => question.conceptId === conceptId)
    .map((question) => ({ question, priority: Math.abs(question.difficulty - session.skillRating) + (answeredIds.has(question.id) ? 0.3 : 0) }))
    .sort((left, right) => left.priority - right.priority);
  if (!candidates.length) throw new Error(`No questions for concept '${conceptId}'`);
  return candidates[0].question;
}

validateDag(prerequisites);
