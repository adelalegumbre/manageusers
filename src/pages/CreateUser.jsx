import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../components/Form';
import { AppContext } from '../context/AppContext';

export const CreateUser = () => {
  const [countryList, setCountryList] = useState();
  const [cityList, setCityList] = useState();
  const {
    getCountries,
    getCities,
    selectedCountry,
    setSelectedCountry,
    setSelectedCity,
  } = useContext(AppContext);

  const setCountries = async () => {
    const resp = await getCountries();
    setCountryList(resp);
  };

  const setCities = async () => {
    const resp = await getCities();
    setCityList(resp);
  };

  const handleClick = () => {
    setSelectedCountry(null);
    setSelectedCity(null);
  };

  useEffect(() => {
    setCountries();
  }, []);

  useEffect(() => {
    if (!selectedCountry) return;
    setCities();
  }, [selectedCountry]);

  return (
    <>
      <div>
        <h1>Create User</h1>
        <Form countries={countryList} cities={cityList} />
      </div>
      <Link to={'/'} onClick={handleClick}>
        Home
      </Link>
    </>
  );
};
