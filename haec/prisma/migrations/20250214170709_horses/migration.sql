-- CreateTable
CREATE TABLE "horses" (
    "id" SERIAL NOT NULL,
    "show_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "feed" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "horses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "horses_show_name_key" ON "horses"("show_name");
