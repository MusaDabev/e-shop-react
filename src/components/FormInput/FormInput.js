import React from 'react'
import {Grid, TextField } from '@mui/material'
import {useFormContext, Controller } from 'react-hook-form'
import './formInput.css';

function FormInput({ name, label }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
     render = {({ field})=> (
      <TextField
      defaultValue=""
          fullWidth
          label={label}
          required
      />
  )}
      />
    </Grid>
  );
}

export default FormInput;