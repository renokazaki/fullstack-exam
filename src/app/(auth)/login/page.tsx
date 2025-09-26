import Card from "@mui/material/Card";
import React from "react";
import styles from "../authPage.module.css";
import Link from "next/link";
import LoginForm from "../component/LoginForm";
import { redirect } from "next/navigation";
import { getAuth } from "@/app/Hooks/auth";
export default async function LoginPage() {
  const { data } = await getAuth();
  if (data.user) {
    redirect("/");
  }
  return (
    <div className={styles.authPageContainer}>
      <Card className={styles.card}>
        <h1 className={styles.title}>ログイン</h1>
        <p className={styles.subtitle}>
          アカウントをお持ちでない方は
          <Link href="/signup">新規会員登録</Link>へ
        </p>
        <LoginForm />
      </Card>
    </div>
  );
}
