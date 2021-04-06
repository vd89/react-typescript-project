import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todos: { id: string; text: string }[] = [
    { id: 't1', text: 'Finish the course' },
    { id: 't2', text: 'Work on Typescript to understand' },
  ];
  return (
    <div>
      <h2>hello world</h2>
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
