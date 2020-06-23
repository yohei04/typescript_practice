import React from 'react';

interface TodoListProps {
  items: Array<Item>;
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item) => {
          return <li>{item.text}</li>;
        })}
      </ul>
    </>
  );
};
export default TodoList;
