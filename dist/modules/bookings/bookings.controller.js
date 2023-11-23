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
exports.BookingsController = void 0;
const bookings_service_1 = require("./bookings.service");
const insertIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bookings_service_1.BookingService.insertIntoDB(req.body);
        res.send({
            success: true,
            message: "Booking created successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bookings_service_1.BookingService.getSingleBooking(req.params.phone);
        res.send({
            success: true,
            message: "Booking retrived succesfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getAllBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bookings_service_1.BookingService.getAllBookings();
        res.send({
            success: true,
            message: "Booking retrived succesfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const deleteBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bookings_service_1.BookingService.deleteBooking(req.params.phone);
        res.send({
            success: true,
            message: "Booking deleted succesfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.BookingsController = {
    insertIntoDB,
    getSingleBooking,
    getAllBookings,
    deleteBooking,
};
