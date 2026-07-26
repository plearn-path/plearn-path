import { getNextQuestion, publicQuestion } from "../../../../../features/learning/services/learning-service";

export function GET(_request, { params }) {
  return Response.json(publicQuestion(getNextQuestion(params.studentId)));
}
