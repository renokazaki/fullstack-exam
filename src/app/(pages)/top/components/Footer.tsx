import React from "react";
import styles from "../topPage.module.css";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div></div> {/* 左側の空の要素 */}
      <div className={styles.paginationContainer}>
        <Pagination count={10} color="primary" />
        {/* ページネーションを中央に配置 */}
      </div>
      <div className={styles.createButtonContainer}>
        <Button>質問を投稿</Button>
        {/* 右側に配置 */}
      </div>
    </footer>
  );
};

export default Footer;
