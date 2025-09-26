"use client";

import React from "react";
import { login } from "@/app/lib/action/auth";
import styles from "../authPage.module.css";
import Button from "@mui/material/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginFormValues, loginSchema } from "@/app/lib/validation/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    await login(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          id="userID"
          type="userID"
          placeholder="ユーザーID"
          className={styles.input}
          {...register("userID")}
        />
        {errors.userID && (
          <p className={styles.error}>{errors.userID.message}</p>
        )}
        <input
          id="email"
          type="email"
          placeholder="メールアドレス"
          className={styles.input}
          {...register("email")}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        <input
          id="password"
          type="password"
          placeholder="パスワード"
          className={styles.input}
          {...register("password")}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
        <Button variant="contained" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "ログイン中..." : "ログイン"}
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
