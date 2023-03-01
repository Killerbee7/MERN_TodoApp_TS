"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.updateTodos = exports.getTodos = exports.createTodo = void 0;
const todo_1 = __importDefault(require("../models/todo"));
// const TODOS: Todo[] = [];
const createTodo = (req, res, next) => {
    try {
        const data = req.body;
        console.log("Data", data);
        let todos = await todo_1.default.create(data);
        return res.status(200).json({ message: "todo created successfully", data: todos });
    }
    catch (error) {
        return res.status(500).json({ message: "error.message" });
    }
};
exports.createTodo = createTodo;
const getTodos = async (req, res, next) => {
    try {
        let todos = await todo_1.default.find({});
        return res.status(200).json({ message: "All todos", data: todos });
        res.json({ todos: TODOS });
    }
    catch (error) {
        return res.status(500).json({ message: "error.message" });
    }
};
exports.getTodos = getTodos;
const updateTodos = (req, res, next) => {
    const todoID = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoID);
    if (todoIndex < 0) {
        throw new Error("Could not find todo");
    }
    TODOS[todoIndex] = new todo_1.default(TODOS[todoIndex].id, updatedText);
    res.json({ message: "Updated", updateTodos: TODOS[todoIndex] });
};
exports.updateTodos = updateTodos;
const deleteTodos = (req, res, next) => {
    const todoID = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoID);
    if (todoIndex < 0) {
        throw new Error("Could not find todo");
    }
    TODOS.splice(todoIndex);
    res.json({ message: "deleted", deleteTodos: TODOS[todoIndex] });
};
exports.deleteTodos = deleteTodos;
