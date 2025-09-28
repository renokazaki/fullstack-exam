"use server";

import { prisma } from "../../../../../prisma/prisma";
import { User } from "@prisma/client";
import { UpdateUserFormValues } from "@/app/lib/validation/updateUserSchema";
import { revalidatePath } from "next/cache";

export async function getUserInfo(userId: string) {
  const user: User | null = await prisma.user.findUnique({
    where: { id: userId },
  });
  return user;
}

export async function updateUserInfo(data: UpdateUserFormValues) {
  const { userId, email, username } = data;
  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      username,
      email,
    },
  });

  revalidatePath(`/profile/${userId}`);

  return;
}
