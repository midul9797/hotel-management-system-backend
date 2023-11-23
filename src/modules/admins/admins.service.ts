import { PrismaClient, Admin } from "@prisma/client";
const prisma = new PrismaClient();

const insertIntoDB = async (data: Admin): Promise<Admin> => {
  const result = await prisma.admin.create({ data });
  return result;
};

const getSingleAdmin = async (username: string) => {
  const result =
    await prisma.$queryRaw`SELECT password FROM admins WHERE username = ${username}`;
  return result;
};
export const AdminService = {
  insertIntoDB,
  getSingleAdmin,
};
