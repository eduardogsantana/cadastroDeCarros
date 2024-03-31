-- CreateTable
CREATE TABLE "cad_cars" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "km" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL,

    CONSTRAINT "cad_cars_pkey" PRIMARY KEY ("id")
);
