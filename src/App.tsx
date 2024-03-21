import React, { useState } from 'react';

import ToDo from './components/ToDo';
import NewToDo from './components/NewToDo';

const App: React.FC = () => {
  const [ todos, setTodos ] = useState<{ id: string, text: string }[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text }
    ]);
  };

  const removeTodoHandler = (id: string) => {
    console.log(2);
    
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  }

  return (
    <div className="App">
      <NewToDo addTodo={ addTodoHandler }></NewToDo>
      <ToDo deleteTodo={ removeTodoHandler } items={todos}></ToDo>
    </div>
  );
};

export default App;
