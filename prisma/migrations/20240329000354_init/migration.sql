/*
  Warnings:

  - The `favorite` column on the `cad_cars` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "cad_cars" DROP COLUMN "favorite",
ADD COLUMN     "favorite" BOOLEAN NOT NULL DEFAULT false;
