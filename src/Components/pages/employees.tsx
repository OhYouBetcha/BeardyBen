import React, { useState } from 'react';
import { FC } from 'react';
import Paper from '@material-ui/core/Paper';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import Switch from '@material-ui/core/Switch';
import { EmployeeData } from '../data/EmployeeData';
import pageNotFound from './pageNotFound';

interface EmployeeProps {
  title?: string;
  employeeId?: number;
  clockPin?: number;
  fName?: string;
  lName?: string;
}

export const Employees: FC<EmployeeProps> = ({
  employeeId,
  clockPin,
  fName,
  lName,
  title,
}) => (
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
        <Switch onChange={() => alert('Toggle Changed')} />
        {/* SHOW EMPLOYEE DATA */}
        <ul>
          <li>{employeeId}</li>
          <li>{fName}</li>
          <li>{clockPin}</li>
          <li>{lName}</li>
        </ul>
      </Paper>
    </div>
  </div>
);

Employees.defaultProps = {
  employeeId: 156,
  fName: 'Donald', // This value is adopted when name prop is omitted.
  lName: 'Duck',
  clockPin: 111,
};

export default Employees;
