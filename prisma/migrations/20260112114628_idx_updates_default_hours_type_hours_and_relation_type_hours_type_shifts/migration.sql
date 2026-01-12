/*
  Warnings:

  - You are about to drop the column `type` on the `type_hours` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "type_hours" DROP COLUMN "type",
ADD COLUMN     "type_shift_id" INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE INDEX "fk_type_shifts_default_hours_idx" ON "default_hours"("type_shift_id");

-- CreateIndex
CREATE INDEX "fk_type_shifts_type_hours_idx" ON "type_hours"("type_shift_id");

-- AddForeignKey
ALTER TABLE "type_hours" ADD CONSTRAINT "fk_type_shifts_type_hours" FOREIGN KEY ("type_shift_id") REFERENCES "type_shifts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
