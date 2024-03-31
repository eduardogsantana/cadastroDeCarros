/*
  Warnings:

  - Added the required column `image` to the `cad_cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `cad_cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cad_cars" ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL;
