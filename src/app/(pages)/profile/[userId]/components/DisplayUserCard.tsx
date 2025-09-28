import React from "react";
import styles from "./userCard.module.css";
import { User } from "@prisma/client";

type DisplayUserCardProps = {
  userInfo: User;
};

const DisplayUserCard = ({ userInfo }: DisplayUserCardProps) => {
  return (
    <>
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
    </>
  );
};

export default DisplayUserCard;
