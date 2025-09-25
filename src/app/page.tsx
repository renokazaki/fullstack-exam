import Button from "@mui/material/Button";
import { getAuth } from "./Hooks/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const { data, error } = await getAuth();
  if (error || !data) {
    redirect("/login");
  }
  console.log(data);

  return (
    <>
      <Button variant="text">{data.user?.email}</Button>
    </>
  );
}
