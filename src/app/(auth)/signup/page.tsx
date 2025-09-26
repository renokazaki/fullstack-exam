import React from "react";
import styles from "../authPage.module.css";
import Card from "@mui/material/Card";
import Link from "next/link";
import SignupForm from "../component/SignupForm";
import { redirect } from "next/navigation";
import { getAuth } from "@/app/lib/action/auth/auth";
const SignupPage = async () => {
  const { data } = await getAuth();
  if (data.user) {
    redirect("/");
  }
  return (
    <div className={styles.authPageContainer}>
      <Card className={styles.card}>
        <h1 className={styles.title}>サインアップ</h1>
        <p className={styles.subtitle}>
          既にアカウントをお持ちの方は
          <Link href="/login">ログイン</Link>へ
        </p>
        <SignupForm />
      </Card>
    </div>
  );
};

export default SignupPage;
