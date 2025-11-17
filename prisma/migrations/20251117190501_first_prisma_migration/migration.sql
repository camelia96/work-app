-- CreateTable
CREATE TABLE "default_hours" (
    "id" SERIAL NOT NULL,
    "startHour" VARCHAR(45),
    "startMin" VARCHAR(45),
    "endHour" VARCHAR(45),
    "endMin" VARCHAR(45),
    "type_shift" VARCHAR(45),

    CONSTRAINT "default_hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hours_worked_days" (
    "id" SERIAL NOT NULL,
    "worked_day_id" INTEGER,
    "hours" DOUBLE PRECISION,
    "type_hours_id" INTEGER,

    CONSTRAINT "hours_worked_days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_worked_days" (
    "id" SERIAL NOT NULL,
    "worked_day_id" INTEGER,
    "profile_id" INTEGER,

    CONSTRAINT "profile_worked_days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100),

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_hours" (
    "id" SERIAL NOT NULL,
    "price" DECIMAL(5,2),
    "type" VARCHAR(45),

    CONSTRAINT "type_hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "worked_days" (
    "id" SERIAL NOT NULL,
    "date" DATE,
    "startHour" VARCHAR(45),
    "startMin" VARCHAR(45),
    "endHour" VARCHAR(45),
    "endMin" VARCHAR(45),
    "break" INTEGER,
    "sunday" INTEGER,
    "holiday" INTEGER,

    CONSTRAINT "worked_days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monthly_salary" (
    "id" SERIAL NOT NULL,
    "profile_id" INTEGER,
    "base_salary" DOUBLE PRECISION,
    "month" INTEGER,
    "month_tips" DOUBLE PRECISION,
    "month_salary" DOUBLE PRECISION,
    "total_hours" DOUBLE PRECISION,

    CONSTRAINT "monthly_salary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "fk_type_hours_hours_worked_days_idx" ON "hours_worked_days"("type_hours_id");

-- CreateIndex
CREATE INDEX "fk_worked_days_hours_worked_days_idx" ON "hours_worked_days"("worked_day_id");

-- CreateIndex
CREATE INDEX "fk_profiles_idx" ON "profile_worked_days"("profile_id");

-- CreateIndex
CREATE INDEX "fk_worked_days_idx" ON "profile_worked_days"("worked_day_id");

-- CreateIndex
CREATE INDEX "fk_monthly_salary_profiles_idx" ON "monthly_salary"("profile_id");

-- AddForeignKey
ALTER TABLE "hours_worked_days" ADD CONSTRAINT "fk_type_hours_hours_worked_days" FOREIGN KEY ("type_hours_id") REFERENCES "type_hours"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hours_worked_days" ADD CONSTRAINT "fk_worked_days_hours_worked_days" FOREIGN KEY ("worked_day_id") REFERENCES "worked_days"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profile_worked_days" ADD CONSTRAINT "fk_profiles_profile_worked_days" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profile_worked_days" ADD CONSTRAINT "fk_worked_days_profile_worked_days" FOREIGN KEY ("worked_day_id") REFERENCES "worked_days"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "monthly_salary" ADD CONSTRAINT "fk_monthly_salary_profiles" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
