/*
  Warnings:

  - You are about to drop the column `user` on the `user_login` table. All the data in the column will be lost.
  - Added the required column `username` to the `user_login` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_login" DROP COLUMN "user",
ADD COLUMN     "username" TEXT NOT NULL;
