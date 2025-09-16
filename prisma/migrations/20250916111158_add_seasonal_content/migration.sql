-- CreateTable
CREATE TABLE "public"."seasonal_content" (
    "id" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "months" TEXT NOT NULL,
    "temperature" TEXT NOT NULL,
    "weather" TEXT NOT NULL,
    "bestFor" TEXT NOT NULL,
    "events" TEXT NOT NULL,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "status" "public"."PostStatus" NOT NULL DEFAULT 'DRAFT',
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "seasonal_content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."seasonal_destinations" (
    "id" TEXT NOT NULL,
    "seasonId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "rating" TEXT,
    "bestTime" TEXT,
    "budget" TEXT,
    "highlights" TEXT[],
    "prompt" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "seasonal_destinations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."seasonal_itineraries" (
    "id" TEXT NOT NULL,
    "seasonId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "prompt" TEXT,

    CONSTRAINT "seasonal_itineraries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."seasonal_itinerary_days" (
    "id" TEXT NOT NULL,
    "itineraryId" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "seasonal_itinerary_days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."seasonal_activities" (
    "id" TEXT NOT NULL,
    "dayId" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "activity" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cost" TEXT,
    "type" TEXT NOT NULL,
    "tips" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "seasonal_activities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."seasonal_tips" (
    "id" TEXT NOT NULL,
    "seasonId" TEXT NOT NULL,
    "packing" TEXT[],
    "advice" TEXT[],

    CONSTRAINT "seasonal_tips_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "seasonal_content_season_key" ON "public"."seasonal_content"("season");

-- CreateIndex
CREATE UNIQUE INDEX "seasonal_itineraries_seasonId_key" ON "public"."seasonal_itineraries"("seasonId");

-- CreateIndex
CREATE UNIQUE INDEX "seasonal_tips_seasonId_key" ON "public"."seasonal_tips"("seasonId");

-- AddForeignKey
ALTER TABLE "public"."seasonal_destinations" ADD CONSTRAINT "seasonal_destinations_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "public"."seasonal_content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."seasonal_itineraries" ADD CONSTRAINT "seasonal_itineraries_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "public"."seasonal_content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."seasonal_itinerary_days" ADD CONSTRAINT "seasonal_itinerary_days_itineraryId_fkey" FOREIGN KEY ("itineraryId") REFERENCES "public"."seasonal_itineraries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."seasonal_activities" ADD CONSTRAINT "seasonal_activities_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "public"."seasonal_itinerary_days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."seasonal_tips" ADD CONSTRAINT "seasonal_tips_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "public"."seasonal_content"("id") ON DELETE CASCADE ON UPDATE CASCADE;
