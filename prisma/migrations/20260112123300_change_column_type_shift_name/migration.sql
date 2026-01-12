/*
  Warnings:

  - You are about to drop the column `type_shift_id` on the `default_hours` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "default_hours" DROP COLUMN "type_shift_id",
ADD COLUMN     "type_hours_id" INTEGER NOT NULL DEFAULT 1;
