import { Response, Request } from "express";
import { BookingService } from "./bookings.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await BookingService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "Booking created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSingleBooking = async (req: Request, res: Response) => {
  try {
    const result = await BookingService.getSingleBooking(req.params.phone);
    res.send({
      success: true,
      message: "Booking retrived succesfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getAllBookings = async (req: Request, res: Response) => {
  try {
    const result = await BookingService.getAllBookings();
    res.send({
      success: true,
      message: "Booking retrived succesfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const deleteBooking = async (req: Request, res: Response) => {
  try {
    const result = await BookingService.deleteBooking(req.params.phone);
    res.send({
      success: true,
      message: "Booking deleted succesfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const BookingsController = {
  insertIntoDB,
  getSingleBooking,
  getAllBookings,
  deleteBooking,
};
