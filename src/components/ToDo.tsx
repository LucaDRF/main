import React from "react";
import './TodoList.css';

import DeleteToDo from "./DeleteToDo";

interface ToDoProps {
    items: { 
        id: string,
        text: string
    }[],
    deleteTodo: (id: string) => void
}

const ToDo: React.FC<ToDoProps> = props => {
    const { items, deleteTodo } = props;

    return <ul>
        { items.map(item => {
            return <li key={item.id}>
                <h3>{item.text}</h3>
                <DeleteToDo deleteTodo={deleteTodo} id={item.id}></DeleteToDo>
            </li>
        }) }
    </ul>
}

export default ToDo;
