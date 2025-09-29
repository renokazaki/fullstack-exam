"use server";

import { revalidatePath } from "next/cache";
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
      comments: true,
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

export const updateBestAnswer = async (
  questionId: string,
  answerId: string
) => {
  // 新しいベストアンサーを設定
  const updatedQuestion = await prisma.question.update({
    where: { id: questionId },
    data: { bestAnswerId: answerId },
  });

  const updatedAnswer = await prisma.answer.update({
    where: { id: answerId },
    data: {
      bestAnswerFor: {
        connect: { id: questionId },
      },
    },
  });

  revalidatePath(`/questions/${questionId}`);

  return { updatedQuestion, updatedAnswer };
};

export const voteAnswer = async (
  answerId: string,
  myUserId: string,
  type: string
) => {
  const vote = await prisma.vote.create({
    data: {
      id: crypto.randomUUID(),
      answerId,
      userId: myUserId,
      type: type,
    },
  });

  await prisma.answer.update({
    where: { id: answerId },
    data: {
      votes: {
        connect: { id: vote.id },
      },
    },
  });
  revalidatePath(`/questions/${answerId}`);
};

export const createComment = async (
  answerId: string,
  myUserId: string,
  content: string
) => {
  const comment = await prisma.comment.create({
    data: {
      id: crypto.randomUUID(),
      answerId,
      content,
      userId: myUserId,
      createdAt: new Date(),
    },
  });
  await prisma.answer.update({
    where: { id: answerId },
    data: {
      comments: {
        connect: { id: comment.id },
      },
    },
  });
  revalidatePath(`/questions/${answerId}`);
  return comment;
};
