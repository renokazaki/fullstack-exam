"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../../../../../prisma/prisma";
import { getUserId } from "../auth/auth";
import { SubmitQuestionFormValues } from "../../validation/SubmitContentSchema";

// 質問を投稿するサーバーアクション
export async function createQuestion(data: SubmitQuestionFormValues) {
  try {
    const userId = await getUserId();
    // フォームデータから質問の情報を取得
    const title = data.title as string;
    const description = data.description as string;
    const tagsInput = data.tags as string;

    // タグ文字列をカンマで分割して配列に変換し、空白を削除
    const tagNames = tagsInput
      ? tagsInput
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag !== "")
      : [];

    // 質問IDを生成
    const questionId = crypto.randomUUID();

    // 質問を作成
    const question = await prisma.question.create({
      data: {
        id: questionId,
        title,
        description,
        userId,
        categoryId: null,
        isDraft: false,
        createdAt: new Date(),
      },
    });

    // タグを処理
    if (tagNames.length > 0) {
      // 各タグに対して処理
      for (const tagName of tagNames) {
        // 既存のタグを検索
        let tag = await prisma.tag.findFirst({
          where: {
            name: tagName,
          },
        });

        // タグが存在しない場合は新規作成
        if (!tag) {
          tag = await prisma.tag.create({
            data: {
              id: crypto.randomUUID(),
              name: tagName,
            },
          });
        }

        // 質問とタグを関連付け（QuestionTagテーブルに登録）
        await prisma.questionTag.create({
          data: {
            questionId: question.id,
            tagId: tag.id,
          },
        });
      }
    }

    // ページを再検証してデータを更新
    revalidatePath("/questions");
    return { success: true, questionId: question.id };
  } catch (error) {
    console.error("質問の作成に失敗しました:", error);
    return null;
  }
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
