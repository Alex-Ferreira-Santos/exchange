/*
  Warnings:

  - The values [Stocks,Reits] on the enum `OrderItemsType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `situation` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderSituation" AS ENUM ('OPEN', 'EXECUTED', 'REFUSED', 'CLOSED');

-- AlterEnum
BEGIN;
CREATE TYPE "OrderItemsType_new" AS ENUM ('STOCKS', 'REITS', 'ETFS');
ALTER TABLE "Order" ALTER COLUMN "item_type" TYPE "OrderItemsType_new" USING ("item_type"::text::"OrderItemsType_new");
ALTER TYPE "OrderItemsType" RENAME TO "OrderItemsType_old";
ALTER TYPE "OrderItemsType_new" RENAME TO "OrderItemsType";
DROP TYPE "OrderItemsType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "situation" "OrderSituation" NOT NULL;
