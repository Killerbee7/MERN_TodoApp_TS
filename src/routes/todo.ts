import Router from "express";
import {createTodo, deleteTodos, getTodos, updateTodos} from '../controlller/todo';

const router = Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.patch("/:id", updateTodos);
router.delete("/:id", deleteTodos);

export default router;