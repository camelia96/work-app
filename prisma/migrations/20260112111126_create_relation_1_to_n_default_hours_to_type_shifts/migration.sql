/*
  Warnings:

  - You are about to drop the column `type_shift` on the `default_hours` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "default_hours" DROP COLUMN "type_shift",
ADD COLUMN     "type_shift_id" INTEGER NOT NULL DEFAULT 1;

-- AddForeignKey
ALTER TABLE "default_hours" ADD CONSTRAINT "fk_type_shifts_default_hours" FOREIGN KEY ("type_shift_id") REFERENCES "type_shifts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
