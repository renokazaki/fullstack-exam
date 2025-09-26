import Card from "@mui/material/Card";
import React from "react";
import styles from "./questionCard.module.css"; // スタイルファイル名を変更
import Badge from "@mui/material/Badge";
import { Question, QuestionTag, User, Tag } from "@prisma/client";

type QuestionWithRelations = Question & {
  tags: (QuestionTag & { tag: Tag })[];
  user: User | null;
};

type QuestionCardProps = {
  question: QuestionWithRelations;
};

const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <Card className={styles.card}>
      <h2>{question.title}</h2>
      <div className={styles.badgeContainer}>
        {question.tags.map((tag) => (
          <Badge key={tag.tagId} className={styles.badge}>
            {tag.tag.name}
          </Badge>
        ))}
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userInfoIcon}>icon</div>
        <div className={styles.userInfoDetail}>
          <p>{question.user?.username}</p>
          <p>{question.createdAt?.toLocaleDateString()}</p>
        </div>
      </div>
    </Card>
  );

  //   // リンクが必要な場合はLinkでラップ、そうでない場合はそのまま返す
  //   return linkToDetail ? (
  //     <Link href={`/questions/${question.id}`} className={styles.cardLink}>
  //       {cardContent}
  //     </Link>
  //   ) : cardContent;
};

export default QuestionCard;
