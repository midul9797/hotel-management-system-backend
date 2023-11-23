import { PrismaClient, Booking } from "@prisma/client";
const prisma = new PrismaClient();

const insertIntoDB = async (data: Booking): Promise<Booking> => {
  const result = await prisma.booking.create({ data });
  return result;
};

const getSingleBooking = async (phone: string) => {
  const result =
    await prisma.$queryRaw`SELECT * FROM bookings INNER JOIN customers ON bookings.customer_phone = ${phone} AND customers.phone=${phone}`;
  return result;
};
const getAllBookings = async () => {
  const result =
    await prisma.$queryRaw`SELECT * FROM bookings INNER JOIN customers ON bookings.customer_phone=customers.phone`;
  return result;
};
const deleteBooking = async (phone: string) => {
  const update =
    await prisma.$queryRaw`UPDATE rooms SET customer_phone=null, available=true WHERE customer_phone=${phone}`;
  const result =
    await prisma.$queryRaw`DELETE FROM bookings WHERE customer_phone=${phone}`;
  const r = await prisma.$queryRaw`DELETE FROM customers WHERE phone=${phone}`;
  return result;
};
export const BookingService = {
  insertIntoDB,
  getSingleBooking,
  getAllBookings,
  deleteBooking,
};
