import { publicQuestion, submitAnswer } from "../../../../../features/learning/services/learning-service";

export async function POST(request, { params }) {
  const body = await request.json();
  if (typeof body.questionId !== "string" || typeof body.answer !== "string") {
    return Response.json({ error: "questionId and answer are required" }, { status: 400 });
  }
  const result = submitAnswer(params.studentId, body.questionId, body.answer, Number(body.durationMs) || 0);
  if (!result) return Response.json({ error: "Question not found" }, { status: 404 });
  return Response.json({ ...result, nextQuestion: publicQuestion(result.nextQuestion) });
}
