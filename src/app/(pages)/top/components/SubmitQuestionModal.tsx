"use client";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SubmitQuestionFormValues,
  submitQuestionSchema,
} from "@/app/lib/validation/SubmitContentSchema";
import styles from "../topPage.module.css";
import InputLabel from "@mui/material/InputLabel";
import { createQuestion } from "@/app/lib/action/question/function";

type SubmitQuestionModalProps = {
  open: boolean;
  onClose: () => void;
};
export default function SubmitQuestionModal({
  open,
  onClose,
}: SubmitQuestionModalProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SubmitQuestionFormValues>({
    resolver: zodResolver(submitQuestionSchema),
  });
  const onSubmit = async (data: SubmitQuestionFormValues) => {
    const response = await createQuestion(data);
    if (!response) {
      console.log("質問の投稿に失敗しました");
    } else {
      console.log("質問の投稿に成功しました");
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
          <h2 id="modal-modal-title">質問を投稿</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel htmlFor="title">タイトル</InputLabel>
            <input
              id="title"
              type="text"
              placeholder="質問のタイトルを入力してください"
              {...register("title")}
              className={styles.modalInput}
            />
            {errors.title && (
              <p className={styles.modalError}>
                {errors.title.message as string}
              </p>
            )}

            <InputLabel htmlFor="description">説明</InputLabel>
            <textarea
              id="description"
              placeholder="質問の詳細を入力してください"
              {...register("description")}
              className={styles.modalTextArea}
            />
            {errors.description && (
              <p className={styles.modalError}>
                {errors.description.message as string}
              </p>
            )}

            <InputLabel htmlFor="categoryId">カテゴリ</InputLabel>
            <input
              id="categoryId"
              type="text"
              placeholder="カテゴリを入力してください"
              {...register("categoryId")}
              className={styles.modalInput}
            />
            {errors.categoryId && (
              <p className={styles.modalError}>
                {errors.categoryId.message as string}
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
