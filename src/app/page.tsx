import Button from "@mui/material/Button";
import { getAuth } from "./Hooks/auth";
import { redirect } from "next/navigation";
import { prisma } from "../../prisma/prisma";

export default async function Home() {
  const { data, error } = await getAuth();
  if (error || !data) {
    redirect("/login");
  }
  console.log(data);
  const questions = await prisma.question.findMany();
  console.log(questions);

  return (
    <>
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
