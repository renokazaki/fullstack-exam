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
import { useRouter } from "next/navigation";
import DraftModalContainer from "../Draft/DraftModalContainer";
import { useState } from "react";
type SubmitQuestionModalProps = {
  open: boolean;
  onClose: () => void;
};
export default function SubmitQuestionModal({
  open,
  onClose,
}: SubmitQuestionModalProps) {
  const router = useRouter();
  const [openDraftModal, setOpenDraftModal] = useState(false);
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
      await router.push(`/questions/${response.questionId}`);
      console.log("質問の投稿に成功しました");
      onClose();
    }
  };
  const handleOpenDraftModal = () => {
    setOpenDraftModal(true);
  };
  const handleCloseDraftModal = () => {
    setOpenDraftModal(false);
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
          <div className={styles.modalContentHeader}>
            <h2 id="modal-modal-title">質問を投稿</h2>
            <Button onClick={handleOpenDraftModal}>下書きリスト</Button>
          </div>
          <DraftModalContainer
            open={openDraftModal}
            onClose={handleCloseDraftModal}
          />
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

            <InputLabel htmlFor="tags">タグ</InputLabel>
            <input
              id="tags"
              type="text"
              placeholder="タグを入力してください"
              {...register("tags")}
              className={styles.modalInput}
            />
            {errors.tags && (
              <p className={styles.modalError}>
                {errors.tags.message as string}
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
