import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  items: Item[]
  toggleItem: ToggleItem;
  filter: string
}

const TodoList: React.FC<TodoListProps> = ({ items, toggleItem, filter}) => {
  const displayItems: Array<Item> = items.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
    return false;
  });

  return (
    <>
      <ul>
        {displayItems.map((item) => (
          <TodoItem key={item.key} item={item} toggleItem={toggleItem} />
        ))}
      </ul>
      <div className="panel-block">{displayItems.length} items</div>
    </>
  );
};
export default TodoList;
