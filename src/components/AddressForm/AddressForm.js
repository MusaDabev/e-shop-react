import React, {useEffect, useState} from "react";
import {
  Typography,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import {Link} from 'react-router-dom'
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "../FormInput";
import {commerce} from '../../lib/commerce.js'
import './adressForm.css'

function AddressForm({checkoutToken, next}) {

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name])=>({id: code, label: name}))
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name])=>({id: code, label: name}))
  const options = shippingOptions.map((sO) => ({id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`}))
 

  const fetchShippingCountries = async  (checkoutTokenID) => {
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenID);
    


    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0])
  }

  const fetchSudivisions = async (countryCode) => {
      const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);

      setShippingSubdivisions(subdivisions);
      setShippingSubdivision(Object.keys(subdivisions)[0]);
  }

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(()=>{
    fetchShippingCountries(checkoutToken.id)
  }, [])

  useEffect(()=> {
   if (shippingCountry) fetchSudivisions(shippingCountry);
  }, [shippingCountry])

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);


  return (
    <div className="adress-form">
      <Typography variant="h6" gutterBottom>
        Адрес за доставка
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({...data, shippingCountry, shippingOption, shippingSubdivision}) )}>
          <Grid container spacing={3}>
            <FormInput name="firstName" label="Име" />
            <FormInput name="lastName" label="Фамилия" />
            <FormInput name="adress1" label="Адрес" />
            <FormInput  name="email" label="Email" />
            <FormInput  name="city" label="Град" />
            <FormInput  name="zip" label="Пощенски код" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Страна за доставка</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                  {country.label}
                </MenuItem>
                ))}
                
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Област</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                  {subdivision.label}
                </MenuItem>
                ))}
                
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Опции за доставка</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
              {options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                  {option.label}
                </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Назад към количка</Button>
            <Button type="submit" variant="contained" color="primary">Напред</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default AddressForm;
