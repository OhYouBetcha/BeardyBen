import React from 'react';
import Paper from '@material-ui/core/Paper';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import Switch from '@material-ui/core/Switch';
import { FC, useState } from 'react';
import TodoListItem from './TodoListItem';

//interface
interface Props {
  title: string;
}

//this basically says that this is a const var "todos" OF TYPE ARRAY
//with the TYPE of "TODO" which is brought in from the TYPES file in types.d.ts
const todos: Array<Todo> = [
  { text: 'Walk the dog', complete: true },
  { text: 'Write app', complete: false },
];

///what is actually exported,this is the base function
export const ToDoApp: FC<Props> = ({ title }) => {
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

          {/* TODO LIST START */}
          <div>
            <TodoListItem />
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ToDoApp;
