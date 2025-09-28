"use client";
import React, { useState } from "react";
import SubmitAnswerModal from "./SubmitAnswerModal";
import Button from "@mui/material/Button";
import styles from "../Answer.module.css";

export const SubmitModalContainer = ({
  questionId,
}: {
  questionId: string;
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen} className={styles.submitButton}>
        回答を投稿
      </Button>
      <SubmitAnswerModal
        open={open}
        onClose={handleClose}
        questionId={questionId}
      />
    </>
  );
};
