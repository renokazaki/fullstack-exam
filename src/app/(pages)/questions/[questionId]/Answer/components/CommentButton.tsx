"use client";

import React, { useState } from "react";
import styles from "./comment.module.css";
import SubmitCommentModal from "./SubmitCommentModal";

type CommentButtonProps = {
  answerId: string;
  myUserId: string;
};
const CommentButton = ({ answerId, myUserId }: CommentButtonProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={styles.commentButtonContainer}>
        <button className={styles.commentButton} onClick={handleOpen}>
          返信
        </button>
      </div>
      <SubmitCommentModal
        open={open}
        onClose={handleClose}
        myUserId={myUserId}
        answerId={answerId}
      />
    </>
  );
};

export default CommentButton;
