import { nextConcept, prerequisites } from "../data/catalog";

export function validateDag(graph) {
  const visiting = new Set();
  const visited = new Set();

  const visit = (concept) => {
    if (visiting.has(concept)) {
      throw new Error(`Prerequisite cycle found at '${concept}'`);
    }
    if (visited.has(concept)) return;

    visiting.add(concept);
    for (const prerequisite of graph[concept] ?? []) {
      if (!(prerequisite in graph)) {
        throw new Error(`Unknown prerequisite '${prerequisite}'`);
      }
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
  const nextRating = session.skillRating + delta;

  session.skillRating = Math.max(0, Math.min(1, Number(nextRating.toFixed(3))));
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

function questionPriority(question, skillRating, answeredIds) {
  const distance = Math.abs(question.difficulty - skillRating);
  const repeatPenalty = answeredIds.has(question.id) ? 0.3 : 0;
  return distance + repeatPenalty;
}

export function chooseNextQuestion(session, questions, conceptId) {
  const answeredIds = new Set(session.recentAttempts.map((attempt) => attempt.questionId));
  const candidates = questions
    .filter((question) => question.conceptId === conceptId)
    .map((question) => ({
      question,
      priority: questionPriority(question, session.skillRating, answeredIds)
    }))
    .sort((left, right) => left.priority - right.priority);

  if (!candidates.length) {
    throw new Error(`No questions for concept '${conceptId}'`);
  }

  return candidates[0].question;
}

validateDag(prerequisites);
