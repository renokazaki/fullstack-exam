"use client";
import React, { useState } from "react";
import styles from "./userCard.module.css";
import { User } from "@prisma/client";
import Button from "@mui/material/Button";
import { EditUserCard } from "./EditUserCard";
import DisplayUserCard from "./DisplayUserCard";
import Card from "@mui/material/Card";

type UserInfoProps = {
  userInfo: User;
  myUserID: string;
};

const UserInfo = ({ userInfo, myUserID }: UserInfoProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <>
      <Card className={styles.card}>
        <div className={styles.profileInfo}>
          <div className={styles.profileHeader}>
            <h2>プロフィール</h2>
            {myUserID === userInfo.id && (
              <Button
                variant="contained"
                color={isEdit ? "warning" : "primary"}
                onClick={() => setIsEdit(!isEdit)}
              >
                {isEdit ? "編集中" : "編集"}
              </Button>
            )}
          </div>
          {isEdit ? (
            <EditUserCard
              userInfo={userInfo}
              setIsEdit={setIsEdit}
              formId="editUserCard"
              setIsSubmit={setIsSubmit}
            />
          ) : (
            <DisplayUserCard userInfo={userInfo} />
          )}
        </div>
      </Card>

      <div className={styles.buttonContainer}>
        {isEdit && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setIsEdit(false);
              setIsSubmit(true);
            }}
            disabled={isSubmit}
          >
            保存せずに戻る
          </Button>
        )}
        {isEdit && (
          <Button
            variant="contained"
            color="primary"
            form="editUserCard"
            type="submit"
            disabled={isSubmit}
          >
            {isSubmit ? "保存中..." : "保存"}
          </Button>
        )}
      </div>
    </>
  );
};

export default UserInfo;
