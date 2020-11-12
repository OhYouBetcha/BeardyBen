import React from 'react';
import Paper from '@material-ui/core/Paper';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import { FC, useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

// HERE IS THE YOUTUBE VIDEO USED FOR THE TODO APP
// https://www.youtube.com/watch?v=ODvirqIC09A&amp=&ab_channel=DevTuts
//interface
interface Props {
  title: string;
}

//this basically says that this is a const var "todos" OF TYPE ARRAY
//with the TYPE of "TODO" which is brought in from the TYPES file in types.d.ts
const initialTodos: Array<Todo> = [
  { text: 'Walk the dog', complete: true },
  { text: 'Write app', complete: false },
];

///what is actually exported,this is the base function
export const ToDoApp: FC<Props> = ({ title }) => {
  //In order to manage the checked/unchecked status we need to manage state
  const [todos, setTodos] = useState(initialTodos);

  //function to toggle the todo's
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  //handler
  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <div
      css={css`
        height: 80%;
        min-height: 80%;
        padding: 50px;
        max-width: 90%;
        min-width: 85%;
        margin: 50px 2% auto 13%;
        position: fixed;
      `}
    >
      <div>
        <Paper
          elevation={5}
          css={css`
            padding: 25px;
            min-height: 800px;
          `}
        >
          <h1>{title}</h1>

          {/* TODO LIST START */}
          <div>
            <React.Fragment>
              <TodoList todos={todos} toggleTodo={toggleTodo} />
              <AddTodoForm addTodo={addTodo} />
            </React.Fragment>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ToDoApp;
