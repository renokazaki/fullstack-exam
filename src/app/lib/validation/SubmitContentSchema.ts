import { z } from "zod";

export const submitQuestionSchema = z.object({
  title: z.string().min(1, { message: "タイトルは必須です" }),
  description: z.string().min(1, { message: "説明は必須です" }),
  categoryId: z.string().min(1, { message: "カテゴリは必須です" }),
});

export type SubmitQuestionFormValues = z.infer<typeof submitQuestionSchema>;
