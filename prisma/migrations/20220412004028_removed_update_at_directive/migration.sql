/*
  Warnings:

  - You are about to drop the column `currentPrice` on the `Livestock` table. All the data in the column will be lost.
  - You are about to drop the column `salePrice` on the `Livestock` table. All the data in the column will be lost.
  - Added the required column `price` to the `Livestock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Livestock" DROP COLUMN "currentPrice",
DROP COLUMN "salePrice",
ADD COLUMN     "discountedPrice" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
