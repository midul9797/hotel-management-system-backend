import express from "express";
import { BookingsController } from "./bookings.controller";
const router = express.Router();

router
  .get("/:phone", BookingsController.getSingleBooking)
  .get("/", BookingsController.getAllBookings)
  .post("/create-booking", BookingsController.insertIntoDB)
  .delete("/:phone", BookingsController.deleteBooking);
export const BookingsRoutes = router;
