/*
  Warnings:

  - The primary key for the `QRCode` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `QRCode` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "QRCode" DROP CONSTRAINT "QRCode_pkey",
DROP COLUMN "id",
ADD COLUMN     "qrId" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "QRCode_pkey" PRIMARY KEY ("qrId");
