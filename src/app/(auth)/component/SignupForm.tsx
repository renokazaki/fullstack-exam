"use client";

import Button from "@mui/material/Button";
import { signup } from "@/app/lib/action/auth/auth";
import styles from "../authPage.module.css";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  SignupFormValues,
  signupSchema,
} from "@/app/lib/validation/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });
  const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    await signup(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          id="userName"
          type="userName"
          placeholder="名前"
          className={styles.input}
          {...register("userName")}
        />
        {errors.userName && (
          <p className={styles.error}>{errors.userName.message}</p>
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
        <input
          id="passwordConfirm"
          type="password"
          placeholder="パスワード（確認用）"
          className={styles.input}
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm && (
          <p className={styles.error}>{errors.passwordConfirm.message}</p>
        )}
        <Button variant="contained" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "サインアップ中..." : "サインアップ"}
        </Button>
      </form>
    </>
  );
};

export default SignupForm;
