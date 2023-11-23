import { Response, Request } from "express";
import { RoomService } from "./rooms.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await RoomService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "Room created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const roomCount = async (req: Request, res: Response) => {
  try {
    const { roomType, bedType, rooms } = req.params;

    const result = await RoomService.countRoom(
      roomType,
      bedType,

      +rooms
    );
    res.send({ data: result });
  } catch (error) {
    res.send(error);
  }
};
const roomUpdate = async (req: Request, res: Response) => {
  try {
    const { roomType, bedType, rooms } = req.params;
    const { customer_phone } = req.body;
    const result = await RoomService.roomUpdate(
      roomType,
      bedType,
      customer_phone,
      +rooms
    );
    res.send({
      success: true,
      message: "Room created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getAllRooms = async (req: Request, res: Response) => {
  try {
    const result = await RoomService.getAllRooms();
    res.send({
      success: true,
      message: "Rooms retrived succesfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSingleRoom = async (req: Request, res: Response) => {
  try {
    const result = await RoomService.getSingleRoom(req.params.room);
    res.send({
      success: true,
      message: "Room retrived succesfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const RoomsController = {
  insertIntoDB,
  getSingleRoom,
  getAllRooms,
  roomUpdate,
  roomCount,
};
