"use server";

import { prisma } from "../../../../../prisma/prisma";
import { User } from "@prisma/client";

export async function getUserInfo(userId: string) {
  const user: User | null = await prisma.user.findUnique({
    where: { id: userId },
  });
  return user;
}
