import { PrismaClient, Customer } from "@prisma/client";
const prisma = new PrismaClient();

const insertIntoDB = async (data: Customer): Promise<Customer> => {
  const result = await prisma.customer.create({ data });
  return result;
};

const getSingleCustomer = async (phone: string) => {
  const result =
    await prisma.$queryRaw`SELECT * FROM customers WHERE phone = ${phone}`;
  return result;
};
export const CustomerService = {
  insertIntoDB,
  getSingleCustomer,
};
