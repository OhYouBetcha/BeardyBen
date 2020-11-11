import React from 'react';
import Paper from '@material-ui/core/Paper';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import Switch from '@material-ui/core/Switch';
import { FC, useState } from 'react';

//interface
interface Props {
  title: string;
}
interface todoState {
  text: string;
  isCompleted: boolean;
}

function Todo({ todos, index }) {
  return <div className="todo">{todos.text}</div>;
}

///what is actually exported,this is the base function
export const ToDoApp: FC<Props> = ({ title }) => {
  const [todos, setTodos] = useState<todoState[]>([
    {
      text: 'Learn about react',
      isCompleted: false,
    },
    {
      text: 'Meet Friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build really cool todo app',
      isCompleted: false,
    },
  ]);

  return (
    <div
      css={css`
        height: 80%;
        min-height: 80%;
        padding: 50px;
        max-width: 90%;
        min-width: 85%;
        margin: 50px 2% auto 10%;
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
          <div className="app">
            <div className="todo-list">
              {todos.map((todos, index) => (
                <Todo key={index} index={index} todo={todos.text} />
              ))}
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ToDoApp;
