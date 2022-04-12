/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Livestock" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "currentPrice" INTEGER,
    "salePrice" INTEGER,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "sellerId" INTEGER,

    CONSTRAINT "Livestock_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Livestock" ADD CONSTRAINT "Livestock_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
