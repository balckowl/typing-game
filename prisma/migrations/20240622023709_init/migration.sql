/*
  Warnings:

  - You are about to drop the column `highScore` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `experiencePoint` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "highScore",
DROP COLUMN "experiencePoint",
ADD COLUMN     "highScore" INTEGER NOT NULL DEFAULT 0;
