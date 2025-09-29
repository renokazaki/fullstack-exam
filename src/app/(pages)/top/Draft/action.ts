"use server";
import { prisma } from "../../../../../prisma/prisma";

export const getDraftList = async () => {
  const draftList = await prisma.question.findMany({
    where: {
      isDraft: true,
    },
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
  return draftList;
};
