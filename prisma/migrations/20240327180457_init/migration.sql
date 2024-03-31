-- CreateTable
CREATE TABLE "user_login" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_login_pkey" PRIMARY KEY ("id")
);
