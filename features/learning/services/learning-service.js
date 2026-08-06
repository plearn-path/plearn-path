import { chooseNextQuestion, moveToTargetConcept, recordAttempt } from "../engine/adaptive-engine";
import { questions } from "../data/catalog";

const sessions = new Map();

function sessionFor(studentId) {
  if (!sessions.has(studentId)) {
    sessions.set(studentId, {
      studentId,
      skillRating: 0.5,
      currentConceptId: "functions_basics",
      recentAttempts: [],
      masteredConcepts: new Set()
    });
  }

  return sessions.get(studentId);
}

function feedbackFor(isCorrect) {
  return isCorrect
    ? "เก่งมาก! ลองโจทย์ถัดไปได้เลย"
    : "ยังไม่เป็นไร ลองใช้คำใบ้และคิดทีละขั้นนะ";
}

export function publicQuestion(question) {
  const { answer, ...safeQuestion } = question;
  return safeQuestion;
}

export function getNextQuestion(studentId) {
  const session = sessionFor(studentId);
  return chooseNextQuestion(session, questions, session.currentConceptId);
}

export function submitAnswer(studentId, questionId, answer, durationMs = 0) {
  const question = questions.find((item) => item.id === questionId);
  if (!question) return null;

  const session = sessionFor(studentId);
  const normalizedAnswer = String(answer).trim().replace("−", "-");
  const isCorrect = normalizedAnswer === question.answer;
  const attempt = {
    questionId,
    conceptId: question.conceptId,
    isCorrect,
    durationMs
  };
  const action = recordAttempt(session, attempt);
  const targetConcept = moveToTargetConcept(session, action);
  const nextQuestion = chooseNextQuestion(session, questions, targetConcept);

  return {
    isCorrect,
    action,
    skillRating: session.skillRating,
    feedback: feedbackFor(isCorrect),
    nextQuestion
  };
}
