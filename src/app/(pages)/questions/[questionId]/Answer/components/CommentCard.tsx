import Card from "@mui/material/Card";
import React from "react";
import { Comment } from "@prisma/client";
import Link from "next/link";
import styles from "./comment.module.css";

type CommentCardProps = {
  comment: Comment;
};

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <Card className={styles.commentCard}>
      <div className={styles.commentUserInfo}>
        <Link
          href={`/profile/${comment.userId}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className={styles.commentUserInfoIcon}>icon</div>
          <div className={styles.commentUserDetailInfo}>
            <p>{comment.createdAt?.toLocaleDateString()}</p>
          </div>
        </Link>
      </div>
      <p className={styles.commentContent}>{comment.content}</p>
    </Card>
  );
};

export default CommentCard;
