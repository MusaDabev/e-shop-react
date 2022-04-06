import React, { useState } from 'react'
import {Paper, Typography, Stepper, Step, StepLabel, CircularProgress,Divider, Button } from '@mui/material';
import './checkout.css'
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import Confiramtion from './Confiramtion';

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Shipping adress', 'Payment details'];

    const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />

  return (
    <>
      <div className="checkout-container">
      <Paper>
    <Typography variant='h4' align='center'>Плащане</Typography>
    <Stepper activeStep={activeStep}>
        {steps.map((step)=> (
            <Step key={step}>
                <StepLabel>{step}</StepLabel>
            </Step>
        ))}
    </Stepper>
            {activeStep === steps.length ? <Confiramtion /> : <Form />}
      </Paper>
   
      </div>
    </>
  )
}

export default Checkout
