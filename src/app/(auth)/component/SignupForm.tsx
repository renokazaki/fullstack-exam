import Button from "@mui/material/Button";
import { signup } from "@/app/action/auth";
import styles from "../authPage.module.css";
import React from "react";

const SignupForm = () => {
  return (
    <>
      <form action={signup} className={styles.form}>
        <input
          id="userName"
          name="userName"
          type="userName"
          required
          placeholder="名前"
          className={styles.input}
        />
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="メールアドレス"
          className={styles.input}
        />
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="パスワード"
          className={styles.input}
        />
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          required
          placeholder="パスワード（確認用）"
          className={styles.input}
        />
        <Button variant="contained" type="submit">
          サインアップ
        </Button>
      </form>
    </>
  );
};

export default SignupForm;
