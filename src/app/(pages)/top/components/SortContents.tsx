import React from "react";
import styles from "../topPage.module.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const SortContents = () => {
  return (
    <div className={styles.sortArea}>
      <Card className={styles.sortCard}>
        <p>Sort by</p>
        <Button variant="text">Newest</Button>
        <Button variant="text">Oldest</Button>
        <Button variant="text">Most Votes</Button>
        <Button variant="text">Most Answers</Button>
        <Button variant="text">Most Comments</Button>
        <Button variant="text">Most Views</Button>
      </Card>
    </div>
  );
};

export default SortContents;
