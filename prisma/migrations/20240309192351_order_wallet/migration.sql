/*
  Warnings:

  - You are about to drop the column `client_id` on the `Order` table. All the data in the column will be lost.
  - Added the required column `wallet_id` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_client_id_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "client_id",
ADD COLUMN     "wallet_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Wallet" ADD COLUMN     "balance" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_wallet_id_fkey" FOREIGN KEY ("wallet_id") REFERENCES "Wallet"("wallet_id") ON DELETE RESTRICT ON UPDATE CASCADE;
