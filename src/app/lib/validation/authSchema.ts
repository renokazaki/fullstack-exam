import * as z from "zod";

export const signupSchema = z
  .object({
    userName: z.string().min(1, { message: "名前は必須です" }),
    email: z.string().email({ message: "メールアドレスが不正です" }),
    password: z.string().min(6, { message: "パスワードは6文字以上です" }),
    passwordConfirm: z
      .string()
      .min(6, { message: "パスワードは6文字以上です" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "パスワードが一致しません",
    path: ["passwordConfirm"],
  });

export const loginSchema = z.object({
  userID: z.string().min(1, { message: "ユーザーIDは必須です" }),
  email: z.string().email({ message: "メールアドレスが不正です" }),
  password: z.string().min(6, { message: "パスワードは6文字以上です" }),
});

export type SignupFormValues = z.infer<typeof signupSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;
