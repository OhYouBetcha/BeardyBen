import React from 'react';
import { gray2 } from '../CSS/Styles';
import { css, jsx } from '@emotion/core';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

export const HeaderUserInfo = () => (
  <div
    css={css`
      color: ${gray2};
      font-size: 16px;
    `}
  >
    <span
      css={css`
        padding: 0 15px;
      `}
    >
      {' '}
      <Badge badgeContent={4} color="primary">
        <NotificationsIcon />
      </Badge>
    </span>

    <Button
      variant="outlined"
      size="large"
      startIcon={<PersonIcon />}
      onClick={() => {
        alert('Sign In');
      }}
    >
      Sign In
    </Button>
  </div>
);

export default HeaderUserInfo;
