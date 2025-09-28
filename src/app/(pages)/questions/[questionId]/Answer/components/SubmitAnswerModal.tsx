"use client";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SubmitAnswerFormValues,
  submitAnswerSchema,
} from "@/app/lib/validation/SubmitContentSchema";
import styles from "../Answer.module.css";
import InputLabel from "@mui/material/InputLabel";
import { createAnswer } from "@/app/lib/action/answer/action";
import { useRouter } from "next/navigation";

export default function SubmitAnswerModal({
  open,
  onClose,
  questionId,
}: {
  open: boolean;
  onClose: () => void;
  questionId: string;
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SubmitAnswerFormValues>({
    resolver: zodResolver(submitAnswerSchema),
  });
  const onSubmit = async (data: SubmitAnswerFormValues) => {
    const response = await createAnswer(data);
    if (!response) {
      console.log("回答の投稿に失敗しました");
    } else {
      await router.push(`/questions/${response.questionId}`);
      console.log("回答の投稿に成功しました");
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
            回答を投稿
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              id="questionId"
              type="hidden"
              {...register("questionId")}
              value={questionId}
            />
            <InputLabel htmlFor="content" color="primary">
              本文
            </InputLabel>
            <textarea
              id="content"
              placeholder="回答の本文を入力してください"
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
                {isSubmitting ? "投稿中..." : "投稿する"}
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}
