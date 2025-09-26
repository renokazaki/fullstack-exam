"use server";
import { redirect } from "next/navigation";
import { createClient } from "../../../../utils/supabase/server";
import { LoginFormValues, SignupFormValues } from "../validation/authSchema";

export async function login(data: LoginFormValues) {
  const supabase = await createClient();

  const loginData = {
    email: data.email as string,
    password: data.password as string,
  };

  const { error } = await supabase.auth.signInWithPassword(loginData);

  if (error) {
    console.log(error);
    redirect("/error");
  }
  redirect("/");
}

export async function signup(data: SignupFormValues) {
  const supabase = await createClient();

  const signupData = {
    email: data.email as string,
    password: data.password as string,
  };

  const { error } = await supabase.auth.signUp(signupData);

  if (error) {
    console.log(error);
    redirect("/error");
  }
  redirect("/");
}
