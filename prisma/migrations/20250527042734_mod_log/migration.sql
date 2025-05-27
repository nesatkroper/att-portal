-- AlterTable
ALTER TABLE "AuthLog" ADD COLUMN     "action" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "ip" TEXT,
ADD COLUMN     "message" TEXT,
ADD COLUMN     "metadata" TEXT,
ADD COLUMN     "method" TEXT,
ADD COLUMN     "userAgent" TEXT;
