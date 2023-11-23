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
exports.RoomService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.room.create({ data });
    return result;
});
const getValues = (data, values = []) => {
    if (typeof data !== "object") {
        return [...values, data];
    }
    return Object.values(data).flatMap((v) => getValues(v, values));
};
const roomUpdate = (roomType, bedType, customerPhone, rooms) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(customerPhone);
    const update = yield prisma.$queryRaw `UPDATE rooms SET available = false, customer_phone=${customerPhone} WHERE number in (SELECT number FROM rooms WHERE room_type=${roomType} AND bed_type=${bedType} AND available = true ORDER BY number LIMIT ${rooms})`;
    let result = yield prisma.$queryRaw `SELECT number FROM rooms WHERE customer_phone = ${customerPhone}`;
    console.log(update);
    const response = getValues(result);
    if (response.length === 0)
        return "No Room Available";
    return response;
});
const countRoom = (roomType, bedType, rooms) => __awaiter(void 0, void 0, void 0, function* () {
    const countedRooms = yield prisma.$queryRaw `SELECT COUNT(*) as counted_rooms FROM rooms WHERE room_type=${roomType} AND bed_type=${bedType} AND available = true`;
    if (Number(getValues(countedRooms[0])[0]) < rooms ||
        Number(getValues(countedRooms[0])[0]) === 0)
        return "Not Enough Rooms";
    else
        return true;
});
const getSingleRoom = (room) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.$queryRaw `SELECT * FROM customers WHERE phone = (SELECT customer_phone FROM rooms WHERE number = ${room}) `;
    return result;
});
const getAllRooms = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.$queryRaw `SELECT * FROM rooms  ORDER BY rooms.number`;
    return result;
});
exports.RoomService = {
    insertIntoDB,
    getSingleRoom,
    roomUpdate,
    getAllRooms,
    countRoom,
};
