/*
  Warnings:

  - You are about to drop the column `current_price` on the `ETF` table. All the data in the column will be lost.
  - You are about to drop the column `current_price` on the `Reit` table. All the data in the column will be lost.
  - You are about to drop the column `current_price` on the `Stock` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ETF" DROP COLUMN "current_price";

-- AlterTable
ALTER TABLE "Reit" DROP COLUMN "current_price";

-- AlterTable
ALTER TABLE "Stock" DROP COLUMN "current_price";

-- CreateTable
CREATE TABLE "Stock_Prices" (
    "stock_price_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "price" INTEGER NOT NULL,
    "stock_id" TEXT NOT NULL,

    CONSTRAINT "Stock_Prices_pkey" PRIMARY KEY ("stock_price_id")
);

-- CreateTable
CREATE TABLE "Reit_Prices" (
    "stock_price_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "price" INTEGER NOT NULL,
    "reit_id" TEXT NOT NULL,

    CONSTRAINT "Reit_Prices_pkey" PRIMARY KEY ("stock_price_id")
);

-- CreateTable
CREATE TABLE "ETF_Prices" (
    "stock_price_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "price" INTEGER NOT NULL,
    "etf_id" TEXT NOT NULL,

    CONSTRAINT "ETF_Prices_pkey" PRIMARY KEY ("stock_price_id")
);

-- AddForeignKey
ALTER TABLE "Stock_Prices" ADD CONSTRAINT "Stock_Prices_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "Stock"("stock_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reit_Prices" ADD CONSTRAINT "Reit_Prices_reit_id_fkey" FOREIGN KEY ("reit_id") REFERENCES "Reit"("reit_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ETF_Prices" ADD CONSTRAINT "ETF_Prices_etf_id_fkey" FOREIGN KEY ("etf_id") REFERENCES "ETF"("etf_id") ON DELETE RESTRICT ON UPDATE CASCADE;
