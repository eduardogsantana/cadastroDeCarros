/*
  Warnings:

  - You are about to drop the `my_favorite_cars` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "my_favorite_cars";

-- CreateTable
CREATE TABLE "Favorite" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "user_login"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cad_cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
