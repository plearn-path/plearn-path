import { chooseNextQuestion, moveToTargetConcept, recordAttempt } from "../engine/adaptive-engine";
import { questions } from "../data/catalog";

const sessions = new Map();

function sessionFor(studentId) {
  if (!sessions.has(studentId)) {
    sessions.set(studentId, { studentId, skillRating: 0.5, currentConceptId: "integer_basics", recentAttempts: [], masteredConcepts: new Set() });
  }
  return sessions.get(studentId);
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
  const isCorrect = String(answer).trim().replace("−", "-") === question.answer;
  const action = recordAttempt(session, { questionId, conceptId: question.conceptId, isCorrect, durationMs });
  const nextQuestion = chooseNextQuestion(session, questions, moveToTargetConcept(session, action));
  return { isCorrect, action, skillRating: session.skillRating, feedback: isCorrect ? "เก่งมาก! ลองโจทย์ถัดไปได้เลย" : "ยังไม่เป็นไร ลองใช้คำใบ้และคิดทีละขั้นนะ", nextQuestion };
}
