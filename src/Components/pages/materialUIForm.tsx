import React from 'react';
import Paper from '@material-ui/core/Paper';
/** @jsxImportSource @emotion/core */
import { css, jsx } from '@emotion/core';
import Switch from '@material-ui/core/Switch';
import { FC } from 'react';
import { TextField } from '@material-ui/core';
import { Formik, Form } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  emails: string;
}

interface Props {
  title: string;
  onSubmit: (values: Values) => void;
}

export const MaterialUIForm: FC<Props> = ({ title, onSubmit }) => (
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
        {/* Form Start */}

        <Formik
          initialValues={{ firstname: '', lastName: '', email: '' }}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <TextField
                name="firstName"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  </div>
);

export default MaterialUIForm;
