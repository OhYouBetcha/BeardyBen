import React from 'react';

//Todo is from the types.ts file
interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label>
        {' '}
        <input type="checkbox" checked={todo.complete}></input>
      </label>
    </li>
  );
};

export default TodoListItem;
