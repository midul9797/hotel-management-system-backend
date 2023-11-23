"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bookings_controller_1 = require("./bookings.controller");
const router = express_1.default.Router();
router
    .get("/:phone", bookings_controller_1.BookingsController.getSingleBooking)
    .get("/", bookings_controller_1.BookingsController.getAllBookings)
    .post("/create-booking", bookings_controller_1.BookingsController.insertIntoDB)
    .delete("/:phone", bookings_controller_1.BookingsController.deleteBooking);
exports.BookingsRoutes = router;
