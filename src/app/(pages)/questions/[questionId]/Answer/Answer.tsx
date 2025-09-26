import React from "react";
import styles from "./Answer.module.css";
import Card from "@mui/material/Card";
import Badge from "@mui/material/Badge";
import { getAnswers } from "@/app/lib/action/answer/action";
import Link from "next/link";

type AnswerProps = {
  questionId: string;
};

const Answer = async ({ questionId }: AnswerProps) => {
  const answers = await getAnswers(questionId);

  console.log(answers);
  if (!answers) {
    return <div>回答がありません</div>;
  }
  return (
    <>
      <Card className={styles.card}>
        {answers.map((answer) => (
          <div key={answer.id}>
            <p>
              {answer.bestAnswerFor.length > 0
                ? "ベストアンサー"
                : "ベストアンサーに選択する"}
            </p>
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
            <Badge className={styles.answerVote}>
              👍{answer.votes?.length || 0}
            </Badge>
          </div>
        ))}
      </Card>
      {/* //TODO: ここに返信がある場合の条件を書き、コンポーネントを追加 */}
    </>
  );
};

export default Answer;
