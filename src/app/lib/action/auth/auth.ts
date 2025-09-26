"use server";
import { redirect } from "next/navigation";
import { createClient } from "../../../../../utils/supabase/server";
import { LoginFormValues, SignupFormValues } from "../../validation/authSchema";
import { prisma } from "../../../../../prisma/prisma";
import bcrypt from "bcrypt";

export async function getAuth() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  return { data, error };
}

export async function getUserId() {
  const { data, error } = await getAuth();
  if (error || !data.user) {
    redirect("/login");
  }
  return data.user.id;
}

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

  // ユーザーテーブルにユーザーを作成
  //目的：このユーザテーブルのidに対して、質問や回答が紐づけられるため
  const userId = await getUserId();
  const passwordHash = await bcrypt.hash(data.password, 10);
  await prisma.user.create({
    data: {
      id: userId,
      username: data.userName as string,
      email: data.email as string,
      passwordHash: passwordHash,
      createdAt: new Date(),
    },
  });

  redirect("/");
}
