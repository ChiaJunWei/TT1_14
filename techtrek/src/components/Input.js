import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export const Input = ({ name, handleChange, label, autoFocus, type, handleShowPassword, value, required }) => (
  <Grid item xs={12} style = {{padding: 5}}>
    <TextField
      name={name}
      value = {value}
      onChange={handleChange}
      variant="outlined"
      required = {required != null ? required : true}
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      InputProps={name === 'password' ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      } : null}
    />
  </Grid>
);