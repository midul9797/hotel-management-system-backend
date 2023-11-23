import express from "express";
import { AdminsController } from "./admins.controller";
const router = express.Router();

router
  .get("/:username", AdminsController.getSingleAdmin)
  .post("/create-admin", AdminsController.insertIntoDB);
export const AdminsRoute = router;
