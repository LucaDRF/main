import React, { useRef } from "react";
import './NewTodo.css';

type NewToDoProps = { 
    addTodo: (text: string) => void
};

const NewToDo: React.FC<NewToDoProps> = props => {
    const inputTodoText = useRef<HTMLInputElement>(null);
    const { addTodo } = props

    const submitEventHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const inputValue = inputTodoText.current!.value;
        
        addTodo(inputValue);

        inputTodoText.current!.value = '';
    }; 

    return <form onSubmit={submitEventHandler}>
        <div>
            <label htmlFor="todo-text"></label>
            <input ref={inputTodoText} type="text" name="todo-text"/>
        </div>
        <button type="submit">Add To Do</button>
    </form>
}

export default NewToDo;
