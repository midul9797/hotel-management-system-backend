"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsRoute = void 0;
const express_1 = __importDefault(require("express"));
const admins_controller_1 = require("./admins.controller");
const router = express_1.default.Router();
router
    .get("/:username", admins_controller_1.AdminsController.getSingleAdmin)
    .post("/create-admin", admins_controller_1.AdminsController.insertIntoDB);
exports.AdminsRoute = router;
