-- CreateTable
CREATE TABLE "my_favorite_cars" (
    "id" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idCars" INTEGER NOT NULL,

    CONSTRAINT "my_favorite_cars_pkey" PRIMARY KEY ("id")
);
