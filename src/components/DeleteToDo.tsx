import React from "react";

interface deleteToDoProps {
    id: string,
    deleteTodo: (id: string) => void
}

const DeleteToDo: React.FC<deleteToDoProps> = props => {
    const { id, deleteTodo } = props;

    return <button onClick={deleteTodo.bind(null, id)} type="button">Remove</button>
}

export default DeleteToDo;
