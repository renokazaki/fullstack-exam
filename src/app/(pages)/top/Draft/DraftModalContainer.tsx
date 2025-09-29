import { Card, CardContent, Modal, Typography } from "@mui/material";
import { getDraftList } from "./action";
import { useEffect, useState } from "react";
import { Question, QuestionTag, Tag } from "@prisma/client";
import styles from "./draft.module.css";
type DraftModalContainerProps = {
  open: boolean;
  onClose: () => void;
};

type QuestionWithTags = Question & {
  tags: (QuestionTag & { tag: Tag })[];
};

const DraftModalContainer = ({ open, onClose }: DraftModalContainerProps) => {
  const [draftLists, setDraftList] = useState<QuestionWithTags[]>([]);
  useEffect(() => {
    const result = async () => {
      const result = await getDraftList();
      setDraftList(result as QuestionWithTags[]);
    };
    result();
  }, []);

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={styles.draftModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {draftLists.length > 0 ? (
        <div className={styles.draftModalContainer}>
          <Card className={styles.draftModalCard}>
            <Typography variant="h6">下書き 一覧</Typography>
            {draftLists.map((draft) => (
              <CardContent key={draft.id} className={styles.draftModalContent}>
                <Typography variant="h6">タイトル：{draft.title}</Typography>
                <Typography variant="h6">本文：{draft.description}</Typography>
                <Typography variant="h6">
                  タグ：{draft.tags.map((tag) => tag.tag.name).join(", ")}
                </Typography>
                <Typography variant="h6">
                  作成日時：{draft.createdAt?.toLocaleDateString()}
                </Typography>
              </CardContent>
            ))}
          </Card>
        </div>
      ) : (
        <div>下書きがありません</div>
      )}
    </Modal>
  );
};

export default DraftModalContainer;
