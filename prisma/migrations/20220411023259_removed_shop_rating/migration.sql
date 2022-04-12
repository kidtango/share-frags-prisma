/*
  Warnings:

  - You are about to drop the `shopRating` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rating` to the `ShopReview` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "shopRating" DROP CONSTRAINT "shopRating_shopId_fkey";

-- DropForeignKey
ALTER TABLE "shopRating" DROP CONSTRAINT "shopRating_userId_fkey";

-- AlterTable
ALTER TABLE "ShopReview" ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "shopRating";
