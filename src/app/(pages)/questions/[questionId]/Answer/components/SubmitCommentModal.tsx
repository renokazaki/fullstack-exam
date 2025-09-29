"use client";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SubmitCommentFormValues,
  submitCommentSchema,
} from "@/app/lib/validation/SubmitContentSchema";
import styles from "../Answer.module.css";
import InputLabel from "@mui/material/InputLabel";
import { createComment } from "@/app/lib/action/answer/action";

export default function SubmitCommentModal({
  open,
  onClose,
  myUserId,
  answerId,
}: {
  open: boolean;
  onClose: () => void;
  myUserId: string;
  answerId: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<SubmitCommentFormValues>({
    resolver: zodResolver(submitCommentSchema),
  });
  const onSubmit = async (data: SubmitCommentFormValues) => {
    const response = await createComment(answerId, myUserId, data.content);
    if (!response) {
      console.log("コメントの投稿に失敗しました");
    } else {
      console.log("コメントの投稿に成功しました");
      reset();
      onClose();
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modal}
      >
        <Box className={styles.modalContent}>
          <h2 id="modal-modal-title" className={styles.modalTitle}>
            コメントを投稿
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              id="questionId"
              type="hidden"
              {...register("questionId")}
              value={answerId}
            />
            <InputLabel htmlFor="content" color="primary">
              本文
            </InputLabel>
            <textarea
              id="content"
              placeholder="コメントの本文を入力してください"
              {...register("content")}
              className={styles.modalTextArea}
            />
            {errors.content && (
              <p className={styles.modalError}>
                {errors.content.message as string}
              </p>
            )}

            <div className={styles.modalSubmitButton}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "コメント投稿中..." : "コメントを投稿する"}
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}
