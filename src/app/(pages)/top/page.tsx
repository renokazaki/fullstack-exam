import { getAuth } from "@/app/lib/action/auth/auth";
import { redirect } from "next/navigation";
import styles from "./topPage.module.css";
import Header from "../components/Header/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import QuestionsList from "./components/QuestionsList";
import SortContents from "./components/SortContents";
import Loading from "../components/Loading";

export default async function TopPage() {
  const { data, error } = await getAuth();
  if (error || !data) {
    redirect("/login");
  }

  return (
    <>
      <Header />
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
