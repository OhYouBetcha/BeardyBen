import React from 'react';
import Paper from '@material-ui/core/Paper';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import Switch from '@material-ui/core/Switch';
import { FC, useState } from 'react';
import Button from '@material-ui/core/Button';

interface Props {
  title: string;
}

export const CountApp: FC<Props> = ({ title }) => {
  const [count, setCount] = useState(0);

  function functionTest() {
    alert('this is a function. Also, number will be rest now!');
    setCount(0);
  }

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

          <div
            css={css`
              padding: 0px 50px;
              margin-left: 75px;
            `}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCount(Math.sqrt(count))}
            >
              Square Root Current Number
            </Button>
          </div>

          <div
            css={css`
              padding: 50px;
            `}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCount(count - 1)}
            >
              Decrement
            </Button>
            <span
              css={css`
                padding: 0px 50px;
                font-size: 45px;
                font-weight: bold;
              `}
            >
              {count}
            </span>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </Button>
          </div>
          <div
            css={css`
              padding: 0px 50px;
              margin-left: 75px;
            `}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCount(count * count)}
            >
              Square Current Number
            </Button>
          </div>
          <div
            css={css`
              padding: 50px;
            `}
          >
            {' '}
            <Button variant="contained" color="primary" onClick={functionTest}>
              Reset (and function test)
            </Button>
          </div>

          <Switch onChange={() => alert('Toggle Changed')} />
        </Paper>
      </div>
    </div>
  );
};

export default CountApp;
