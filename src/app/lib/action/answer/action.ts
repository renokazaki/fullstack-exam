"use server";

import { prisma } from "../../../../../prisma/prisma";
import { SubmitAnswerFormValues } from "../../validation/SubmitContentSchema";
import { getUserId } from "../auth/auth";

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

export async function createAnswer(formData: SubmitAnswerFormValues) {
  const userId = await getUserId();
  const questionId = formData.questionId as string;
  const content = formData.content as string;
  const answer = await prisma.answer.create({
    data: {
      id: crypto.randomUUID(),
      questionId,
      content,
      userId,
      createdAt: new Date(),
    },
  });
  return answer;
}
