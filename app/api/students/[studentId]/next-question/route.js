import { getNextQuestion, publicQuestion } from "../../../../../features/learning/services/learning-service";

export async function GET(_request, { params }) {
  const { studentId } = await params;
  return Response.json(publicQuestion(getNextQuestion(studentId)));
}
