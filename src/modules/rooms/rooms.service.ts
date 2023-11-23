import { PrismaClient, Room } from "@prisma/client";
const prisma = new PrismaClient();

const insertIntoDB = async (data: Room): Promise<Room> => {
  const result = await prisma.room.create({ data });
  return result;
};
const getValues = (data: object, values = []): any => {
  if (typeof data !== "object") {
    return [...values, data];
  }
  return Object.values(data).flatMap((v) => getValues(v, values));
};
const roomUpdate = async (
  roomType: string,
  bedType: string,
  customerPhone: string,
  rooms: number
): Promise<string[] | string> => {
  console.log(customerPhone);

  const update =
    await prisma.$queryRaw`UPDATE rooms SET available = false, customer_phone=${customerPhone} WHERE number in (SELECT number FROM rooms WHERE room_type=${roomType} AND bed_type=${bedType} AND available = true ORDER BY number LIMIT ${rooms})`;
  let result =
    await prisma.$queryRaw`SELECT number FROM rooms WHERE customer_phone = ${customerPhone}`;

  console.log(update);
  const response = getValues(result as object);
  if (response.length === 0) return "No Room Available";
  return response as string[];
};
const countRoom = async (roomType: string, bedType: string, rooms: number) => {
  const countedRooms: object[] =
    await prisma.$queryRaw`SELECT COUNT(*) as counted_rooms FROM rooms WHERE room_type=${roomType} AND bed_type=${bedType} AND available = true`;
  if (
    Number(getValues(countedRooms[0])[0]) < rooms ||
    Number(getValues(countedRooms[0])[0]) === 0
  )
    return "Not Enough Rooms";
  else return true;
};
const getSingleRoom = async (room: string) => {
  const result =
    await prisma.$queryRaw`SELECT * FROM customers WHERE phone = (SELECT customer_phone FROM rooms WHERE number = ${room}) `;
  return result;
};
const getAllRooms = async () => {
  const result =
    await prisma.$queryRaw`SELECT * FROM rooms  ORDER BY rooms.number`;
  return result;
};
export const RoomService = {
  insertIntoDB,
  getSingleRoom,
  roomUpdate,
  getAllRooms,
  countRoom,
};
