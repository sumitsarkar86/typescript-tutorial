import React from "react";
import { Todo } from "../models/models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

export interface SingleTodoProps {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    index: number;
}

const SingleTodo = ({ todo, todos, setTodos, index }: SingleTodoProps) => {

    const handleDelete = (id: number) => {

    };

    const handleDone = (id: number) => {
        // Mark the item as Done, mark undone when re-clicked (toggle type)
        setTodos(
            todos.map((todo) => 
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };



    return <>
        <form className="todos__single">
            {todo.isDone ? (
                <s className="todos__single--text">{todo.todo}</s>
            ) : (
                <span className="todos__single--text">{todo.todo}</span>
            )}

            <div>
                <span className="icon" >
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form >
    </>
}

export default SingleTodo;