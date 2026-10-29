-- CreateEnum
CREATE TYPE "Skills" AS ENUM ('HTML', 'JSS', 'CSS', 'JAVASCRIPT', 'PYTHON', 'JAVA', 'CPP', 'C', 'RUST', 'GOLANG', 'REACT', 'EXPRESS', 'NEXTJS', 'NODEJS', 'BUN', 'TYPESCRIPT', 'MONOREPO', 'POSTGRES', 'MONGODB', 'PRISMA');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salary" TEXT,
    "job_title" TEXT NOT NULL,
    "age" TEXT,
    "intro" TEXT,
    "Join_reason" TEXT,
    "resume_url" TEXT,
    "skill" "Skills"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
