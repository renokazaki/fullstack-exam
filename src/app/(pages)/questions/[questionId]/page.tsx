import React, { Suspense } from "react";
import Header from "../../components/Header/Header";
import { getQuestion } from "@/app/lib/action/question/function";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Loading from "../../components/Loading";
import styles from "./questionDetail.module.css";
import Button from "@mui/material/Button";
import BreadCrumbs from "../../components/BreadCrumbs";
import Answer from "./Answer/Answer";
export default async function QuestionDetailPage({
  params,
}: {
  params: Promise<{ questionId: string }>;
}) {
  const { questionId } = await params;
  const question = await getQuestion(questionId);
  if (!question) {
    return <div>Question not found</div>;
  }
  return (
    <>
      <Header />
      <main className={styles.main}>
        <BreadCrumbs
          items={[
            { name: "TOP画面", path: "/top" },
            { name: "質問詳細画面", path: `/questions/${questionId}` },
          ]}
        />
        <Suspense fallback={<Loading />}>
          <QuestionCard question={question} linkToUser={true} />
        </Suspense>
        <div className={styles.answerHeader}>
          <p className={styles.answerHeaderTitle}>全999件の回答</p>
          <Button>回答を投稿</Button>
        </div>
        <Suspense fallback={<Loading />}>
          <Answer questionId={questionId} />
        </Suspense>
      </main>
    </>
  );
}
