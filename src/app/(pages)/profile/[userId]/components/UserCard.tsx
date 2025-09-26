import Card from "@mui/material/Card";
import React from "react";
import styles from "./userCard.module.css"; // スタイルファイル名を変更
import { getUserInfo } from "@/app/lib/action/user/action";
import Button from "@mui/material/Button";

type UserCardProps = {
  userID: string;
};

const UserCard = async ({ userID }: UserCardProps) => {
  const userInfo = await getUserInfo(userID);
  return (
    <Card className={styles.card}>
      <div className={styles.profileHeader}>
        <h2>プロフィール</h2>
        <Button variant="contained" color="primary">
          編集
        </Button>
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.profileIcon}>
          <div>プロフィール画像</div>
        </div>
        <div className={styles.profileEmail}>
          <div>
            メールアドレス:
            {userInfo?.email}
          </div>
        </div>
        <div className={styles.profileName}>
          <div>
            名前:
            {userInfo?.username}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default UserCard;
