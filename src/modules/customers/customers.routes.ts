import express from "express";
import { CustomersController } from "./customers.controller";
const router = express.Router();

router
  .get("/:phone", CustomersController.getSingleCustomer)
  .post("/create-customer", CustomersController.insertIntoDB);
export const CustomersRoutes = router;
