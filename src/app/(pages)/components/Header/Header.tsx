import React from "react";
import styles from "./header.module.css";
import TextField from "@mui/material/TextField";
import LogoutButton from "@/app/(auth)/component/LogoutButton";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLeftIcon}>アイコン</div>
      <div className={styles.headerCenterWrapper}>
        <TextField
          placeholder="検索"
          className={styles.headerCenterSearch}
          fullWidth
          size="small"
        />
      </div>
      <LogoutButton />
      {/* <div className={styles.headerRightUserIcon}>icon</div> */}
    </header>
  );
}
