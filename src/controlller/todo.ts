import { RequestHandler,  } from "express";

import Todo, {TodoModel} from '../models/todo'

// const TODOS: Todo[] = [];

export const createTodo:RequestHandler =( req, res, next) => {

try {
    const data: TodoModel = req.body;
    console.log("Data", data);
    let todos = await Todo.create(data);
    return res.status(200).json({message: "todo created successfully", data: todos})
    
    
} catch (error: any) {
    return  res.status(500).json({message: "error.message"})
}

}


export const getTodos: RequestHandler= async ( req, res, next)=> {

    try {
        let todos = await Todo.find({})
        return res.status(200).json({message: "All todos", data: todos})
        res.json({todos: TODOS})
    } catch (error: any) {
        return  res.status(500).json({message: "error.message"})
    }
    
}


export const updateTodos: RequestHandler<{id: string}> = ( req, res, next)=> {
    const todoID = req.params.id;
    const updatedText = (req.body as {text: string}).text;
    const todoIndex = TODOS.findIndex((todo)=> todo.id === todoID);

    if(todoIndex<0){
        throw new Error("Could not find todo");
    }
    TODOS[todoIndex]= new Todo(TODOS[todoIndex].id, updatedText);
    res.json({message: "Updated", updateTodos:TODOS[todoIndex]})
}

export const deleteTodos: RequestHandler<{id: string}> = ( req, res, next)=> {
    const todoID = req.params.id;
   
    const todoIndex = TODOS.findIndex((todo)=> todo.id === todoID);

    if(todoIndex<0){
        throw new Error("Could not find todo");
    }
    TODOS.splice(todoIndex)
    res.json({message: "deleted", deleteTodos:TODOS[todoIndex]})
}

