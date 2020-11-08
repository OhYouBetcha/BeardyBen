import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, Button, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import BeardIcon from '../../Images/BeardIcon.png';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';

export const Header = () => (
  <div
    css={css`
      top: 0;
      margin-top: 0px;
    `}
  >
    <AppBar position="fixed" style={{ margin: 0 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <img
          src={BeardIcon}
          alt="BeardyBen Icon"
          css={css`
            height: 30px;
            padding: 20px;
          `}
        />
        <Typography variant="h6">BeardyBen</Typography>
        <div
          css={css`
            margin-left: auto;
          `}
        >
          <Button color="inherit" size="large">
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
