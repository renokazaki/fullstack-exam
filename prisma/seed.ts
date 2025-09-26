// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 既存データを削除
  await prisma.comment.deleteMany();
  await prisma.vote.deleteMany();
  await prisma.questionTag.deleteMany();
  await prisma.answer.deleteMany();
  await prisma.question.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // User
  await prisma.user.createMany({
    data: [
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        username: "user1",
        email: "user1@example.com",
        passwordHash: "hash1",
        role: "Student",
        createdAt: new Date("2023-01-01T10:00:00"),
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440001",
        username: "user2",
        email: "user2@example.com",
        passwordHash: "hash2",
        role: "Admin",
        createdAt: new Date("2023-01-02T11:00:00"),
      },
    ],
  });

  // Category (必要最小限)
  await prisma.category.create({
    data: {
      id: "default-category",
      name: "General",
    },
  });

  // Question
  await prisma.question.createMany({
    data: [
      {
        id: "550e8400-e29b-41d4-a716-446655440004",
        title: "How to learn Python?",
        description: "I am new to Python and want to learn it.",
        userId: "550e8400-e29b-41d4-a716-446655440000",
        categoryId: "default-category",
        isDraft: false,
        bestAnswerId: null,
        createdAt: new Date("2023-01-03T09:00:00"),
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440005",
        title: "What is a database?",
        description: "Can someone explain what a database is?",
        userId: "550e8400-e29b-41d4-a716-446655440001",
        categoryId: "default-category",
        isDraft: false,
        bestAnswerId: null,
        createdAt: new Date("2023-01-04T08:00:00"),
      },
    ],
  });

  // Answer
  await prisma.answer.createMany({
    data: [
      {
        id: "550e8400-e29b-41d4-a716-446655440006",
        questionId: "550e8400-e29b-41d4-a716-446655440004",
        content: "Python is a versatile language...",
        userId: "550e8400-e29b-41d4-a716-446655440001",
        createdAt: new Date("2023-01-05T07:00:00"),
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440007",
        questionId: "550e8400-e29b-41d4-a716-446655440005",
        content: "A database is used to store data...",
        userId: "550e8400-e29b-41d4-a716-446655440000",
        createdAt: new Date("2023-01-06T06:00:00"),
      },
    ],
  });

  // Vote
  await prisma.vote.createMany({
    data: [
      {
        id: "550e8400-e29b-41d4-a716-446655440008",
        answerId: "550e8400-e29b-41d4-a716-446655440006",
        userId: "550e8400-e29b-41d4-a716-446655440001",
        type: "Upvote",
      },
      {
        id: "550e8400-e29b-41d4-a716-446655440009",
        answerId: "550e8400-e29b-41d4-a716-446655440007",
        userId: "550e8400-e29b-41d4-a716-446655440000",
        type: "Downvote",
      },
    ],
  });

  // Tag
  await prisma.tag.createMany({
    data: [
      {
        id: "550e8400-e29b-41d4-a716-44665544000a",
        name: "Python",
      },
      {
        id: "550e8400-e29b-41d4-a716-44665544000b",
        name: "SQL",
      },
    ],
  });

  // QuestionTag
  await prisma.questionTag.createMany({
    data: [
      {
        questionId: "550e8400-e29b-41d4-a716-446655440004",
        tagId: "550e8400-e29b-41d4-a716-44665544000a",
      },
      {
        questionId: "550e8400-e29b-41d4-a716-446655440005",
        tagId: "550e8400-e29b-41d4-a716-44665544000b",
      },
    ],
  });

  // Comment
  await prisma.comment.createMany({
    data: [
      {
        id: "550e8400-e29b-41d4-a716-44665544000c",
        questionId: null,
        answerId: "550e8400-e29b-41d4-a716-446655440006",
        content: "Great explanation!",
        userId: "550e8400-e29b-41d4-a716-446655440000",
        createdAt: new Date("2023-01-07T05:00:00"),
      },
      {
        id: "550e8400-e29b-41d4-a716-44665544000d",
        questionId: "550e8400-e29b-41d4-a716-446655440005",
        answerId: null,
        content: "Can you provide more details?",
        userId: "550e8400-e29b-41d4-a716-446655440001",
        createdAt: new Date("2023-01-08T04:00:00"),
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
