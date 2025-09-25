import React from "react";
import { login } from "@/app/action/auth";
import styles from "../authPage.module.css";
import Button from "@mui/material/Button";

const LoginForm = () => {
  return (
    <>
      <form action={login} className={styles.form}>
        <input
          id="userID"
          name="userID"
          type="userID"
          required
          placeholder="ユーザーID"
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
        <Button variant="contained" type="submit">
          ログイン
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
