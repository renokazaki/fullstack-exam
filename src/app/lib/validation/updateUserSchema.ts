import { z } from "zod";

export const updateUserSchema = z.object({
  userId: z.string(),
  email: z.string().email({ message: "メールアドレスが不正です" }),
  username: z.string().min(1, { message: "名前は必須です" }),
});

export type UpdateUserFormValues = z.infer<typeof updateUserSchema>;
