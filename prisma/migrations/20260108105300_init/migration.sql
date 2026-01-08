-- CreateTable
CREATE TABLE "default_hours" (
    "id" SERIAL NOT NULL,
    "startHour" VARCHAR(45) NOT NULL,
    "startMin" VARCHAR(45) NOT NULL,
    "endHour" VARCHAR(45) NOT NULL,
    "endMin" VARCHAR(45) NOT NULL,
    "type_shift" VARCHAR(45) NOT NULL,
    "start_time" TIME(6) NOT NULL,
    "end_time" TIME(6) NOT NULL,

    CONSTRAINT "default_hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hours_worked_days" (
    "id" SERIAL NOT NULL,
    "worked_day_id" INTEGER NOT NULL,
    "hours" DOUBLE PRECISION NOT NULL,
    "type_hours_id" INTEGER NOT NULL,

    CONSTRAINT "hours_worked_days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monthly_salary" (
    "id" SERIAL NOT NULL,
    "profile_id" INTEGER NOT NULL,
    "base_salary" DOUBLE PRECISION NOT NULL,
    "month" INTEGER NOT NULL,
    "month_tips" DOUBLE PRECISION,
    "month_salary" DOUBLE PRECISION,
    "total_hours" DOUBLE PRECISION,

    CONSTRAINT "monthly_salary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_worked_days" (
    "id" SERIAL NOT NULL,
    "worked_day_id" INTEGER NOT NULL,
    "profile_id" INTEGER NOT NULL,

    CONSTRAINT "profile_worked_days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_hours" (
    "id" SERIAL NOT NULL,
    "price" DECIMAL(5,2) NOT NULL,
    "type" VARCHAR(45) NOT NULL,

    CONSTRAINT "type_hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "worked_days" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "startHour" VARCHAR(45) NOT NULL,
    "startMin" VARCHAR(45) NOT NULL,
    "endHour" VARCHAR(45) NOT NULL,
    "endMin" VARCHAR(45) NOT NULL,
    "break" INTEGER NOT NULL,
    "sunday" INTEGER,
    "holiday" INTEGER,

    CONSTRAINT "worked_days_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "fk_type_hours_hours_worked_days_idx" ON "hours_worked_days"("type_hours_id");

-- CreateIndex
CREATE INDEX "fk_worked_days_hours_worked_days_idx" ON "hours_worked_days"("worked_day_id");

-- CreateIndex
CREATE INDEX "fk_monthly_salary_profiles_idx" ON "monthly_salary"("profile_id");

-- CreateIndex
CREATE INDEX "fk_profiles_idx" ON "profile_worked_days"("profile_id");

-- CreateIndex
CREATE INDEX "fk_worked_days_idx" ON "profile_worked_days"("worked_day_id");

-- AddForeignKey
ALTER TABLE "hours_worked_days" ADD CONSTRAINT "fk_type_hours_hours_worked_days" FOREIGN KEY ("type_hours_id") REFERENCES "type_hours"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hours_worked_days" ADD CONSTRAINT "fk_worked_days_hours_worked_days" FOREIGN KEY ("worked_day_id") REFERENCES "worked_days"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "monthly_salary" ADD CONSTRAINT "fk_monthly_salary_profiles" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profile_worked_days" ADD CONSTRAINT "fk_profiles_profile_worked_days" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "profile_worked_days" ADD CONSTRAINT "fk_worked_days_profile_worked_days" FOREIGN KEY ("worked_day_id") REFERENCES "worked_days"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
