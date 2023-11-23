"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customers_controller_1 = require("./customers.controller");
const router = express_1.default.Router();
router
    .get("/:phone", customers_controller_1.CustomersController.getSingleCustomer)
    .post("/create-customer", customers_controller_1.CustomersController.insertIntoDB);
exports.CustomersRoutes = router;
