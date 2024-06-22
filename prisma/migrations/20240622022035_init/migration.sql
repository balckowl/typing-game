/*
  Warnings:

  - You are about to drop the column `HighScore` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `experiencePoint` on the `User` table. All the data in the column will be lost.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photoURL` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "HighScore",
DROP COLUMN "experiencePoint",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "highScore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "photoURL" TEXT NOT NULL;
