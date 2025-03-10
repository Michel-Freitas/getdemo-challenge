-- CreateTable
CREATE TABLE "tb_demo" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "tb_demo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_frame" (
    "id" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "demoId" TEXT NOT NULL,

    CONSTRAINT "tb_frame_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_frame" ADD CONSTRAINT "tb_frame_demoId_fkey" FOREIGN KEY ("demoId") REFERENCES "tb_demo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
