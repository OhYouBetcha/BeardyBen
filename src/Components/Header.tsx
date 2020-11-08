import React from 'react';
import { gray5, headerFontSize } from '../CSS/Styles';

/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import { HeaderTitle } from './HeaderTitle';
import { HeaderUserInfo } from './HeaderUserInfo';

export const Header = () => (
  <div
    css={css`
      position: fixed;
      font-size: ${headerFontSize};
      box-sizing: border-box;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      background-color: #fff;
      border-bottom: 1px solid ${gray5};
      box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
    `}
  >
    {/* Component Logo, Menu Icon, Website Title */}
    <HeaderTitle />
    <HeaderUserInfo />
  </div>
);

export default Header;
