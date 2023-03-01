import Router from "express";
import {createTodo, getTodos, updateTodos} from '../controlller/todo';

const router = Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.patch("/:id", updateTodos);
router.delete("/:id");

export default router;