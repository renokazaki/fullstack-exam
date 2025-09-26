"use server";

import { prisma } from "../../../../../prisma/prisma";

export async function getAnswers(questionId: string) {
  const answers = await prisma.answer.findMany({
    where: { questionId },
    include: {
      user: true,
      votes: true,
      bestAnswerFor: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return answers;
}

// export async function createAnswer(formData: FormData) {
//   const userId = await getUserId();
//   const questionId = formData.get("questionId") as string;
//   const content = formData.get("content") as string;
// }
