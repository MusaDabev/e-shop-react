import React from 'react'
import { Typography, Button, InputLabel, Select, MenuItem, Grid} from '@mui/material';
import {useForm, FormProvider } from 'react-hook-form'
import FormInput from './FormInput';

function AddressForm() {
    const methods = useForm();
  return (
    <>
     <Typography variant='h6' gutterBottom>Shipping address</Typography>
     <FormProvider {...methods}>
    <form onSubmit='' >
        <Grid container spacing={3}>
        <FormInput required name='firstName' label='First name'/>
        <FormInput required name='lastName' label='Last name'/>
        <FormInput required name='adress1' label='Adress'/>
        <FormInput required name='email' label='Email'/>
        <FormInput required name='city' label='City'/>
        <FormInput required name='ZIP' label='ZIP / Postal code'/>
        </Grid>

    </form>
     </FormProvider>
    </>
  )
}

export default AddressForm
