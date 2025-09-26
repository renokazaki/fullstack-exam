import Button from "@mui/material/Button";
import { getAuth } from "./lib/action/auth/auth";
import { redirect } from "next/navigation";
import { getQuestions } from "./lib/action/question/function";
import LogoutButton from "./(auth)/component/LogoutButton";

export default async function Home() {
  const { data, error } = await getAuth();
  if (error || !data) {
    redirect("/login");
  }
  const questions = await getQuestions();
  console.log(questions);

  return (
    <>
      <LogoutButton />
      {questions.map((question) => (
        <div key={question.id}>
          <h2>{question.title}</h2>
          <p>{question.description}</p>
        </div>
      ))}
      <Button variant="text">{data.user?.email}</Button>
    </>
  );
}
