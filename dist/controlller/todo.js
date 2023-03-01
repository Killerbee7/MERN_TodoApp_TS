"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodos = exports.updateTodos = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Create the todo", createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodos = (req, res, next) => {
    const todoID = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoID);
    if (todoIndex < 0) {
        throw new Error("Could not find todo");
    }
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, updatedText);
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
