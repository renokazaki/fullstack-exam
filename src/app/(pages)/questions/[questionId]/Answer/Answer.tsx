import React from "react";
import styles from "./Answer.module.css";
import Card from "@mui/material/Card";
import { getAnswers } from "@/app/lib/action/answer/action";
import Link from "next/link";
import BestAnswerButton from "./components/BestAnswerButton";
import { Question } from "@prisma/client";
import { getUserId } from "@/app/lib/action/auth/auth";
import Button from "@mui/material/Button";
import VoteButton from "./components/VoteButton";

type AnswerProps = {
  question: Question;
};

const Answer = async ({ question }: AnswerProps) => {
  const questionId = question.id;
  const bestAnswerId = question.bestAnswerId;
  const questionUserId = question.userId;
  const myUserId = await getUserId();
  const answers = await getAnswers(questionId);

  if (!answers) {
    return <div>回答がありません</div>;
  }

  return (
    <>
      {answers.map((answer) => (
        <Card className={styles.card} key={answer.id}>
          <div className={styles.bestAnswerButtonContainer}>
            {bestAnswerId ? (
              <p className={styles.bestAnswerText}>ベストアンサー</p>
            ) : (
              questionUserId === myUserId && (
                <BestAnswerButton
                  answerId={answer.id}
                  questionId={questionId}
                />
              )
            )}
          </div>
          <div className={styles.answerUserInfo}>
            <Link
              href={`/profile/${answer.user?.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={styles.answerUserInfoIcon}>icon</div>
              <div className={styles.answerUserDetailInfo}>
                <p>{answer.user?.username}</p>
                <p>{answer.createdAt?.toLocaleDateString()}</p>
              </div>
            </Link>
          </div>

          <div className={styles.answerContent}>
            <p>{answer.content}</p>
          </div>
          <VoteButton
            answerVote={answer.votes?.length || 0}
            myUserId={myUserId}
            answer={answer}
          />
        </Card>
      ))}
      {/* //TODO: ここに返信がある場合の条件を書き、コンポーネントを追加 */}
    </>
  );
};

export default Answer;
