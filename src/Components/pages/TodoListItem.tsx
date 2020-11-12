import React from 'react';
import '../../CSS/TodoListItem.css';

//Todo is from the types.ts file
interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <li>
      {/* IF todo is complete, then the classname is complete. else, it is undefined meaning no style.  */}
      <label className={todo.complete ? 'complete' : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
