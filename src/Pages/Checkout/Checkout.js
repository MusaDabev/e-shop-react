import React, { useState, useEffect, } from 'react'
import {Paper, Typography, Stepper, Step, StepLabel, CircularProgress,Divider, Button } from '@mui/material';
import './checkout.css'
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import {Link,  } from 'react-router-dom'


import { commerce } from '../../lib/commerce';

const Checkout = ({cart, onCaptureCheckout, order, error }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const steps = ['Адрес за доставка', 'Данни за плащане'];
    const [shippingData, setShippingdata] = useState({});
  
    
    useEffect(() => {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});

          console.log(token);

          setCheckoutToken(token);
        } catch (error) {
      
        }
      }
      generateToken();
    }, [cart])

    const nextStep = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1 );
    }

    const backStep = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1 );
    }

    const next = (data) => {
      setShippingdata(data);

      nextStep();
    }

    const Form = () => activeStep === 0 
    ? <AddressForm checkoutToken={checkoutToken} next={next} /> 
    : <PaymentForm shippingData={shippingData} checkoutToken = {checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} />

    let Confirmation = () => (order.customer ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
          <Divider />
          <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
        </div>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>
    ) : (
      <div>
        <CircularProgress />
      </div>
    ));
    
    if (error) {
      Confirmation = () => (
        <>
          <Typography variant="h5">Error: {error}</Typography>
          <br />
          <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
      );
    }

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
            {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
      </Paper>
   
      </div>
    </>
  )
}

export default Checkout
