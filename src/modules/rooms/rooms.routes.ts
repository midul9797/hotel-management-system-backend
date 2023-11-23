import express from "express";
import { RoomsController } from "./rooms.controller";
const router = express.Router();

router
  .get("/count-room/:roomType/:bedType/:rooms", RoomsController.roomCount)
  .get("/:room", RoomsController.getSingleRoom)
  .get("/", RoomsController.getAllRooms)
  .patch("/:roomType/:bedType/:rooms", RoomsController.roomUpdate)
  .post("/create-room", RoomsController.insertIntoDB);
export const RoomsRoutes = router;
