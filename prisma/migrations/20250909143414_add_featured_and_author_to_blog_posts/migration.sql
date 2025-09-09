-- AlterTable
ALTER TABLE "public"."blog_posts" ADD COLUMN     "author" TEXT,
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false;
