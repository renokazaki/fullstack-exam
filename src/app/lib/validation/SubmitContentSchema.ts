import { z } from "zod";

export const submitQuestionSchema = z.object({
  title: z.string().min(1, { message: "タイトルは必須です" }),
  description: z.string().min(1, { message: "説明は必須です" }),
  tags: z.string().min(1, { message: "タグは必須です" }),
});

export type SubmitQuestionFormValues = z.infer<typeof submitQuestionSchema>;

export const submitAnswerSchema = z.object({
  questionId: z.string(),
  content: z.string().min(1, { message: "回答の本文は必須です" }),
});

export type SubmitAnswerFormValues = z.infer<typeof submitAnswerSchema>;

export const submitCommentSchema = z.object({
  questionId: z.string(),
  content: z.string().min(1, { message: "コメントの本文は必須です" }),
});

export type SubmitCommentFormValues = z.infer<typeof submitCommentSchema>;
