import React from 'react';
import BeardyBenLogo from '../Images/BeardIcon.png';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import { fontFamily, gray2 } from '../CSS/Styles';
import MenuIcon from '@material-ui/icons/Menu';

export const HeaderTitle = () => (
  <div>
    {/* Menu Icon */}
    <MenuIcon
      style={{ fontSize: 40 }}
      css={css`
        font-size: 20px;
        color: ${gray2};
        cursor: pointer;
        padding-right: 5px;
      `}
    />
    {/* Logo */}
    <img
      src={BeardyBenLogo}
      alt="Logo of a bearded man"
      css={css`
        height: 40px;
        padding: 0 20px;
        cursor: pointer;
      `}
    />
    {/* Title */}
    <a
      href="./"
      css={css`
        margin: auto 0;
        position: absolute;
        top: 10px;
        vertical-align: middle;
        font-family: ${fontFamily};
        text-decoration: none;
        cursor: pointer;
        color: ${gray2};
      `}
    >
      BeardyBen
    </a>
  </div>
);
export default HeaderTitle;
