import React from 'react'
import {Grid, TextField } from '@mui/material'
import {useFormContext, Controller } from 'react-hook-form'

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
     render = {({ field})=> (
      <TextField
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