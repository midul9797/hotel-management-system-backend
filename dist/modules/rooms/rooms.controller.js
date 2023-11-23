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
exports.RoomsController = void 0;
const rooms_service_1 = require("./rooms.service");
const insertIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield rooms_service_1.RoomService.insertIntoDB(req.body);
        res.send({
            success: true,
            message: "Room created successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const roomCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { roomType, bedType, rooms } = req.params;
        const result = yield rooms_service_1.RoomService.countRoom(roomType, bedType, +rooms);
        res.send({ data: result });
    }
    catch (error) {
        res.send(error);
    }
});
const roomUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { roomType, bedType, rooms } = req.params;
        const { customer_phone } = req.body;
        const result = yield rooms_service_1.RoomService.roomUpdate(roomType, bedType, customer_phone, +rooms);
        res.send({
            success: true,
            message: "Room created successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getAllRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield rooms_service_1.RoomService.getAllRooms();
        res.send({
            success: true,
            message: "Rooms retrived succesfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield rooms_service_1.RoomService.getSingleRoom(req.params.room);
        res.send({
            success: true,
            message: "Room retrived succesfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.RoomsController = {
    insertIntoDB,
    getSingleRoom,
    getAllRooms,
    roomUpdate,
    roomCount,
};
