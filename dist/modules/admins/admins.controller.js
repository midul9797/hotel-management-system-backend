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
exports.AdminsController = void 0;
const admins_service_1 = require("./admins.service");
const insertIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield admins_service_1.AdminService.insertIntoDB(req.body);
        res.send({
            success: true,
            message: "Donor created successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield admins_service_1.AdminService.getSingleAdmin(req.params.username);
        res.send({
            success: true,
            message: "Admin retrived succesfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.AdminsController = {
    insertIntoDB,
    getSingleAdmin,
};
