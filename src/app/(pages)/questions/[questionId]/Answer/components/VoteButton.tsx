"use client";
import React from "react";
import styles from "../Answer.module.css";
import { Answer } from "@prisma/client";
import { voteAnswer } from "@/app/lib/action/answer/action";

type VoteButtonProps = {
  answerVote: number;
  myUserId: string;
  answer: Answer;
};

const VoteButton = ({ answerVote, myUserId, answer }: VoteButtonProps) => {
  const handleVote = () => {
    voteAnswer(answer.id, myUserId, "Upvote");
  };

  if (myUserId === answer.userId) {
    return <></>;
  }

  return (
    <div className={styles.voteButtonContainer}>
      <button className={styles.voteButton} onClick={handleVote}>
        👍{answerVote}
      </button>
    </div>
  );
};

export default VoteButton;
