/*
  Warnings:

  - You are about to drop the column `type_shift_id` on the `type_hours` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "type_hours" DROP COLUMN "type_shift_id",
ADD COLUMN     "type_shift" VARCHAR(45) NOT NULL DEFAULT 'None';
