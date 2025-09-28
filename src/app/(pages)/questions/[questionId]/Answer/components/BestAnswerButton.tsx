"use client";
import { updateBestAnswer } from "@/app/lib/action/answer/action";
import styles from "../Answer.module.css";
const BestAnswerButton = ({
  answerId,
  questionId,
}: {
  answerId: string;
  questionId: string;
}) => {
  const handleBestAnswer = async (answerId: string) => {
    await updateBestAnswer(questionId, answerId);
  };

  return (
    <>
      <button
        className={styles.bestAnswerButton}
        onClick={() => handleBestAnswer(answerId)}
      >
        ベストアンサーに選択する
      </button>
    </>
  );
};

export default BestAnswerButton;
