-- CreateTable
CREATE TABLE "admins" (
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "customers" (
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "address" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("phone")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" SERIAL NOT NULL,
    "customer_phone" TEXT NOT NULL,
    "days" INTEGER NOT NULL,
    "rooms" INTEGER NOT NULL,
    "room_type" TEXT NOT NULL,
    "bed_type" TEXT NOT NULL,
    "roomNumbers" TEXT[],

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rooms" (
    "number" TEXT NOT NULL,
    "room_type" TEXT NOT NULL,
    "bed_type" TEXT NOT NULL,
    "customer_phone" TEXT,
    "available" BOOLEAN NOT NULL,

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("number")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_username_key" ON "admins"("username");

-- CreateIndex
CREATE UNIQUE INDEX "customers_phone_key" ON "customers"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "bookings_id_key" ON "bookings"("id");

-- CreateIndex
CREATE UNIQUE INDEX "rooms_number_key" ON "rooms"("number");

-- AddForeignKey
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_customer_phone_fkey" FOREIGN KEY ("customer_phone") REFERENCES "customers"("phone") ON DELETE SET NULL ON UPDATE CASCADE;
