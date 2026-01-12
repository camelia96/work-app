-- CreateIndex
CREATE INDEX "fk_type_hours_default_hours_idx" ON "default_hours"("type_hours_id");

-- AddForeignKey
ALTER TABLE "default_hours" ADD CONSTRAINT "fk_type_hours_default_hours" FOREIGN KEY ("type_hours_id") REFERENCES "type_hours"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
