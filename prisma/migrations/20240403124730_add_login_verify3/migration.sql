/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `user_login` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_login_username_key" ON "user_login"("username");
