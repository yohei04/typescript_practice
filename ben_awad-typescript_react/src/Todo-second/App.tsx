import React from 'react';
import { TodoListItem } from './components/TodoListItem';

const todos: Array<Todo> = [
  { text: 'Walk the dog', complete: true },
  { text: 'Write app', complete: false },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoListItem />
    </div>
  );
};

export default App;
