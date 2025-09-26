import { getAuth } from "@/app/lib/action/auth/auth";
import { redirect } from "next/navigation";
import styles from "./topPage.module.css";
import Header from "../components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import QuestionsList from "./components/QuestionsList";
import SortContents from "./components/SortContents";
import Skeleton from "@mui/material/Skeleton";

export default async function TopPage() {
  const { data, error } = await getAuth();
  if (error || !data) {
    redirect("/login");
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Suspense
          fallback={
            <Skeleton variant="rectangular" width={"70%"} height={200} />
          }
        >
          <QuestionsList />
        </Suspense>
        <SortContents />
      </main>
      <Footer />
    </>
  );
}
