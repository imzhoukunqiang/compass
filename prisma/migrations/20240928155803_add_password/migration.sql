/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "password" TEXT ;
update "User" set password = '';
alter table "User" alter column "password" set not null;