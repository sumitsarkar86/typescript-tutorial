import React from "react";
import { Todo } from "../models/models";
import SingleTodo from "./SingleTodo";
import "./styles.css";

export interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export function TodoList({ todos, setTodos }: TodoListProps): JSX.Element {
    return (
        <div className="container">
            {
                todos.map((todo, index) => (
                    <SingleTodo index={index} todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
                ))
            }
        </div>
    )
}
