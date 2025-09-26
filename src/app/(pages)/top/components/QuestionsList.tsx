import React from "react";
import styles from "../topPage.module.css";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { getQuestions } from "@/app/lib/action/question/function";
import Link from "next/link";

export default async function QuestionsList() {
  const questions = await getQuestions();
  return (
    <div className={styles.questionContainer}>
      {questions.map((question) => (
        <Link href={`/questions/${question.id}`} key={question.id}>
          <QuestionCard question={question} />
        </Link>
      ))}
    </div>
  );
}
