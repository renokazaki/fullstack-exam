import React from "react";
import styles from "../topPage.module.css";
import Card from "@mui/material/Card";
import Badge from "@mui/material/Badge";
import { getQuestions } from "@/app/lib/action/question/function";

export default async function QuestionsList() {
  const questions = await getQuestions();
  return (
    <div className={styles.questionContainer}>
      {questions.map((question) => (
        <Card key={question.id} className={styles.card}>
          <h2>{question.title}</h2>
          {question.tags.map((tag) => (
            <Badge key={tag.tag?.id} className={styles.badge}>
              {tag.tag?.name}
            </Badge>
          ))}
          <div className={styles.userInfo}>
            <div className={styles.userInfoIcon}>icon</div>
            <div className={styles.userInfoDetail}>
              <p>{question.user?.username}</p>
              <p>{question.createdAt?.toLocaleDateString()}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
