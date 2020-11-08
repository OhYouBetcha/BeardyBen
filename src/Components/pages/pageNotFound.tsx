import React from 'react';
import Paper from '@material-ui/core/Paper';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import Switch from '@material-ui/core/Switch';

export const pageNotFound = () => (
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
        <h1>PAGE NOT FOUND</h1>
      </Paper>
    </div>
  </div>
);

export default pageNotFound;
