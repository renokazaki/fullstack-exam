import Button from "@mui/material/Button";
import { getAuth } from "@/app/lib/action/auth/auth";
import { redirect } from "next/navigation";
import { getQuestions } from "@/app/lib/action/question/function";
import Card from "@mui/material/Card";
import styles from "./topPage.module.css";
import Badge from "@mui/material/Badge";
import Header from "../components/Header";

export default async function TopPage() {
  const { data, error } = await getAuth();
  if (error || !data) {
    redirect("/login");
  }
  const questions = await getQuestions();
  console.log(questions);

  return (
    <>
      <Header />

      {questions.map((question) => (
        <Card key={question.id} className={styles.card}>
          <h2>{question.title}</h2>
          {question.tags.map((tag) => (
            <Badge key={tag.tag?.id} className={styles.badge}>
              {tag.tag?.name}
            </Badge>
          ))}
          <div className={styles.userInfo}>
            <div className={styles.userInfoIcon}>icon</div>
            <div className={styles.userInfoDetail}>
              <p>{question.user?.username}</p>
              <p>{question.createdAt?.toLocaleDateString()}</p>
            </div>
          </div>
        </Card>
      ))}
      <Button variant="text">{data.user?.email}</Button>
    </>
  );
}
