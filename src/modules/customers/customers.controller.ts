import { Response, Request } from "express";
import { CustomerService } from "./customers.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await CustomerService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "Customer created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const getSingleCustomer = async (req: Request, res: Response) => {
  try {
    const result = await CustomerService.getSingleCustomer(req.params.phone);
    res.send({
      success: true,
      message: "Customer retrived succesfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const CustomersController = {
  insertIntoDB,
  getSingleCustomer,
};
