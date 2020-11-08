import React from 'react';
import Paper from '@material-ui/core/Paper';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import Switch from '@material-ui/core/Switch';

export const Homepage = () => (
  <div
    css={css`
      height: 80%;
      padding: 50px;
      width: 80%;
      margin: auto;
    `}
  >
    <div>
      <Paper elevation={2}>Hello World</Paper>
      <Switch onChange={() => alert('Toggle Changed')} />
    </div>
  </div>
);

export default Homepage;
