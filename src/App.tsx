import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string | undefined) => {
    setTodos((prevTodos) => [{ id: Math.random().toString(), text: text }, ...prevTodos]);
  };

  const onDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }
  return (
    <div style={{ margin: '2rem' }}>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={onDeleteHandler} />
    </div>
  );
};

export default App;
