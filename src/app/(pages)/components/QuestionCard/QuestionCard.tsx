import Card from "@mui/material/Card";
import React from "react";
import styles from "./questionCard.module.css"; // スタイルファイル名を変更
import Badge from "@mui/material/Badge";
import { Question, QuestionTag, User, Tag } from "@prisma/client";
import Link from "next/link";

type QuestionWithRelations = Question & {
  tags: (QuestionTag & { tag: Tag })[];
  user: User | null;
};

type QuestionCardProps = {
  question: QuestionWithRelations;
  linkToUser?: boolean;
};

const QuestionCard = ({ question, linkToUser = false }: QuestionCardProps) => {
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
        {linkToUser ? (
          <Link href={`/profile/${question.user?.id}`}>
            <div className={styles.userInfoIcon}>icon</div>
          </Link>
        ) : (
          <div className={styles.userInfoIcon}>icon</div>
        )}
        <div className={styles.userInfoDetail}>
          <p>{question.user?.username}</p>
          <p>{question.createdAt?.toLocaleDateString()}</p>
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;
