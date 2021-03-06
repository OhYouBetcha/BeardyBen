import React from 'react';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { CenterFocusStrong } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

export const SideMenu = () => (
  <div
    css={css`
      margin-top: 75px;
      position: fixed;
      font-size: 30px;
      background-color: #abb0f5;
      text-decoration: none;
    `}
  >
    {' '}
    {/* SIDE NAVIGATION LIST */}
    <div
      css={css`
        top: -10px;
      `}
    >
      <List disablePadding>
        {/* Home List Item */}
        <Link
          to="/"
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <ListItem autoFocus={true} button={true} divider={true}>
            <ListItemIcon>
              <HomeIcon fontSize="large" />
            </ListItemIcon>
            Home
          </ListItem>
        </Link>

        {/* Employees List Item */}
        <Link
          to="/employees"
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <ListItem button={true} divider={true}>
            {' '}
            <ListItemIcon>
              <SettingsIcon fontSize="large" />
            </ListItemIcon>
            Employees
          </ListItem>
        </Link>

        {/* Count App List Item */}
        <Link
          to="/count"
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <ListItem button={true} divider={true}>
            {' '}
            <ListItemIcon>
              <SettingsIcon fontSize="large" />
            </ListItemIcon>
            Count App
          </ListItem>
        </Link>

        {/* To Do App List Item */}
        <Link
          to="/todo"
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <ListItem button={true} divider={true}>
            {' '}
            <ListItemIcon>
              <SettingsIcon fontSize="large" />
            </ListItemIcon>
            To-Do App
          </ListItem>
        </Link>

        {/* Material UI FORm List Item */}
        <Link
          to="/forms"
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <ListItem button={true} divider={true}>
            {' '}
            <ListItemIcon>
              <SettingsIcon fontSize="large" />
            </ListItemIcon>
            Form Practice
          </ListItem>
        </Link>

        {/* Settings List Item */}
        <Link
          to="/settings"
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <ListItem button={true} divider={true}>
            {' '}
            <ListItemIcon>
              <SettingsIcon fontSize="large" />
            </ListItemIcon>
            Settings
          </ListItem>
        </Link>
      </List>
    </div>
  </div>
);

export default SideMenu;
