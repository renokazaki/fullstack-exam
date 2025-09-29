import { getAuth } from "@/app/lib/action/auth/auth";
import { redirect } from "next/navigation";
import styles from "./topPage.module.css";
import Header from "../components/Header/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import QuestionsList from "./components/QuestionsList";
import SortContents from "./components/SortContents";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

export default async function TopPage() {
  const { data, error } = await getAuth();
  if (error || !data) {
    redirect("/login");
  }

  return (
    <>
      <Header />
      <Navbar items={["新着質問一覧", "人気質問一覧"]} />

      <main className={styles.main}>
        <Suspense fallback={<Loading />}>
          <QuestionsList />
        </Suspense>
        <SortContents />
      </main>
      <Footer />
    </>
  );
}
