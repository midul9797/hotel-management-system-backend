import { Response, Request } from "express";
import { AdminService } from "./admins.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await AdminService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "Donor created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSingleAdmin = async (req: Request, res: Response) => {
  try {
    const result = await AdminService.getSingleAdmin(req.params.username);
    res.send({
      success: true,
      message: "Admin retrived succesfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const AdminsController = {
  insertIntoDB,
  getSingleAdmin,
};
