"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("../controlller/todo");
const router = (0, express_1.default)();
router.get("/", todo_1.getTodos);
router.post("/", todo_1.createTodo);
router.patch("/:id");
router.delete("/:id");
exports.default = router;
