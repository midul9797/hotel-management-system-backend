import express, { Application } from "express";
import cors from "cors";

import { AdminsRoute } from "./modules/admins/admins.routes";
import { CustomersRoutes } from "./modules/customers/customers.routes";
import { BookingsRoutes } from "./modules/bookings/bookings.routes";
import { RoomsRoutes } from "./modules/rooms/rooms.routes";
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/admins", AdminsRoute);
app.use("/api/v1/customers", CustomersRoutes);
app.use("/api/v1/bookings", BookingsRoutes);
app.use("/api/v1/rooms", RoomsRoutes);

export default app;
