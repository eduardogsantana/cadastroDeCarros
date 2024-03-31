/*
  Warnings:

  - Made the column `favorite` on table `cad_cars` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "cad_cars" ALTER COLUMN "favorite" SET NOT NULL,
ALTER COLUMN "favorite" SET DATA TYPE TEXT;
