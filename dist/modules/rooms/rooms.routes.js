"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const rooms_controller_1 = require("./rooms.controller");
const router = express_1.default.Router();
router
    .get("/count-room/:roomType/:bedType/:rooms", rooms_controller_1.RoomsController.roomCount)
    .get("/:room", rooms_controller_1.RoomsController.getSingleRoom)
    .get("/", rooms_controller_1.RoomsController.getAllRooms)
    .patch("/:roomType/:bedType/:rooms", rooms_controller_1.RoomsController.roomUpdate)
    .post("/create-room", rooms_controller_1.RoomsController.insertIntoDB);
exports.RoomsRoutes = router;
