/*
  Warnings:

  - Added the required column `user` to the `user_login` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_login" ADD COLUMN     "user" TEXT NOT NULL;
