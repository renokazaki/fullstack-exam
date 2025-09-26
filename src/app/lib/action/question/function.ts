"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../../../../../prisma/prisma";
import { getUserId } from "../auth/auth";
import { SubmitQuestionFormValues } from "../../validation/SubmitContentSchema";
import { Category } from "@prisma/client";

// 質問を投稿するサーバーアクション
export async function createQuestion(data: SubmitQuestionFormValues) {
  const userId = await getUserId();
  // フォームデータから質問の情報を取得
  const title = data.title as string;
  const description = data.description as string;
  const category = data.categoryId as string;
  let createdCategory: Category | null = null;

  if (category) {
    createdCategory = await prisma.tag.create({
      data: {
        id: category,
        name: category,
      },
    });
  }

  // Prismaを使用してデータベースに質問を保存
  await prisma.question.create({
    data: {
      id: crypto.randomUUID(), // UUIDを生成
      title,
      description,
      userId,
      categoryId: createdCategory?.id,
      isDraft: false,
      createdAt: new Date(),
    },
  });

  // ページを再検証してデータを更新
  revalidatePath("/questions");
  return true;
}

// 質問を取得するサーバーアクション
export async function getQuestions() {
  const questions = await prisma.question.findMany({
    include: {
      user: true,
      category: true,
      tags: {
        include: {
          tag: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return questions;
}

// ユーザー自身の質問を取得するサーバーアクション
export async function getUserQuestions() {
  const userId = await getUserId();

  // Prismaを使用してユーザーの質問一覧を取得
  const questions = await prisma.question.findMany({
    where: {
      userId,
    },
    include: {
      category: true,
      tags: {
        include: {
          tag: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return questions;
}

// 質問を取得するサーバーアクション
export async function getQuestion(questionId: string) {
  const question = await prisma.question.findUnique({
    where: { id: questionId },
    include: {
      user: true,
      category: true,
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
  return question;
}
