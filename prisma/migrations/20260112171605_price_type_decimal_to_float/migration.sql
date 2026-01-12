/*
  Warnings:

  - You are about to alter the column `price` on the `type_hours` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "type_hours" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;
