/*
  Warnings:

  - The `type` column on the `type_hours` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "type_hours" DROP COLUMN "type",
ADD COLUMN     "type" INTEGER NOT NULL DEFAULT 1;
