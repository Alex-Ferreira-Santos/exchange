-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('BUY', 'SELL');

-- CreateEnum
CREATE TYPE "OrderItemsType" AS ENUM ('Stocks', 'Reits', 'ETFS');

-- CreateTable
CREATE TABLE "Wallet_Stocks" (
    "wallet_stock_id" TEXT NOT NULL,
    "wallet_id" TEXT NOT NULL,
    "stock_id" TEXT NOT NULL,

    CONSTRAINT "Wallet_Stocks_pkey" PRIMARY KEY ("wallet_stock_id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "stock_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "current_price" INTEGER NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("stock_id")
);

-- CreateTable
CREATE TABLE "Wallet_Reits" (
    "wallet_stock_id" TEXT NOT NULL,
    "wallet_id" TEXT NOT NULL,
    "reit_id" TEXT NOT NULL,

    CONSTRAINT "Wallet_Reits_pkey" PRIMARY KEY ("wallet_stock_id")
);

-- CreateTable
CREATE TABLE "Reit" (
    "reit_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "current_price" INTEGER NOT NULL,

    CONSTRAINT "Reit_pkey" PRIMARY KEY ("reit_id")
);

-- CreateTable
CREATE TABLE "Wallet_ETFS" (
    "wallet_stock_id" TEXT NOT NULL,
    "wallet_id" TEXT NOT NULL,
    "etf_id" TEXT NOT NULL,

    CONSTRAINT "Wallet_ETFS_pkey" PRIMARY KEY ("wallet_stock_id")
);

-- CreateTable
CREATE TABLE "ETF" (
    "etf_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "current_price" INTEGER NOT NULL,

    CONSTRAINT "ETF_pkey" PRIMARY KEY ("etf_id")
);

-- CreateTable
CREATE TABLE "Order" (
    "order_id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "price_per_unit" INTEGER NOT NULL,
    "type" "OrderType" NOT NULL,
    "item_id" TEXT NOT NULL,
    "item_type" "OrderItemsType" NOT NULL,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("order_id")
);

-- AddForeignKey
ALTER TABLE "Wallet_Stocks" ADD CONSTRAINT "Wallet_Stocks_wallet_id_fkey" FOREIGN KEY ("wallet_id") REFERENCES "Wallet"("wallet_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet_Stocks" ADD CONSTRAINT "Wallet_Stocks_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "Stock"("stock_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet_Reits" ADD CONSTRAINT "Wallet_Reits_wallet_id_fkey" FOREIGN KEY ("wallet_id") REFERENCES "Wallet"("wallet_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet_Reits" ADD CONSTRAINT "Wallet_Reits_reit_id_fkey" FOREIGN KEY ("reit_id") REFERENCES "Reit"("reit_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet_ETFS" ADD CONSTRAINT "Wallet_ETFS_wallet_id_fkey" FOREIGN KEY ("wallet_id") REFERENCES "Wallet"("wallet_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet_ETFS" ADD CONSTRAINT "Wallet_ETFS_etf_id_fkey" FOREIGN KEY ("etf_id") REFERENCES "ETF"("etf_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("client_id") ON DELETE RESTRICT ON UPDATE CASCADE;
