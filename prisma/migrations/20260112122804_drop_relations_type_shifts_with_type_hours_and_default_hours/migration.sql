-- DropForeignKey
ALTER TABLE "default_hours" DROP CONSTRAINT "fk_type_shifts_default_hours";

-- DropForeignKey
ALTER TABLE "type_hours" DROP CONSTRAINT "fk_type_shifts_type_hours";

-- DropIndex
DROP INDEX "fk_type_shifts_default_hours_idx";

-- DropIndex
DROP INDEX "fk_type_shifts_type_hours_idx";
