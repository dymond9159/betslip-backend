/*
  Warnings:

  - You are about to drop the `_BetToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BetToUser" DROP CONSTRAINT "_BetToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_BetToUser" DROP CONSTRAINT "_BetToUser_B_fkey";

-- AlterTable
ALTER TABLE "Bet" ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "_BetToUser";

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
