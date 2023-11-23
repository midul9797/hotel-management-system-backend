"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersController = void 0;
const customers_service_1 = require("./customers.service");
const insertIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customers_service_1.CustomerService.insertIntoDB(req.body);
        res.send({
            success: true,
            message: "Customer created successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customers_service_1.CustomerService.getSingleCustomer(req.params.phone);
        res.send({
            success: true,
            message: "Customer retrived succesfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.CustomersController = {
    insertIntoDB,
    getSingleCustomer,
};
