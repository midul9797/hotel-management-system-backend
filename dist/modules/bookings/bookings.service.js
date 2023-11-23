"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.booking.create({ data });
    return result;
});
const getSingleBooking = (phone) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.$queryRaw `SELECT * FROM bookings INNER JOIN customers ON bookings.customer_phone = ${phone} AND customers.phone=${phone}`;
    return result;
});
const getAllBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.$queryRaw `SELECT * FROM bookings INNER JOIN customers ON bookings.customer_phone=customers.phone`;
    return result;
});
const deleteBooking = (phone) => __awaiter(void 0, void 0, void 0, function* () {
    const update = yield prisma.$queryRaw `UPDATE rooms SET customer_phone=null, available=true WHERE customer_phone=${phone}`;
    const result = yield prisma.$queryRaw `DELETE FROM bookings WHERE customer_phone=${phone}`;
    const r = yield prisma.$queryRaw `DELETE FROM customers WHERE phone=${phone}`;
    return result;
});
exports.BookingService = {
    insertIntoDB,
    getSingleBooking,
    getAllBookings,
    deleteBooking,
};
