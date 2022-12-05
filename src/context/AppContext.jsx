import axios from 'axios';
import React, { useState } from 'react';
import { createContext } from 'react';
import { fetchCities } from '../api/fetchCities';
import { fetchCountries } from '../api/fetchCountries';
import { fetchToken } from '../api/fetchToken';
import { fetchUsers } from '../api/fetchUsers';

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const getToken = async () => {
    const token = await fetchToken();
    return token;
  };

  const getCountries = async () => {
    const token = await getToken();
    const resp = await fetchCountries(token);
    return resp;
  };

  const getCities = async () => {
    const token = await getToken();
    const resp = await fetchCities(token, selectedCountry);
    return resp;
  };

  const getUsers = async()=>{
    const resp = await fetchUsers()
    return resp
  }

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:3001/users/${id}`)
  }

  const providerUtils = {
    getToken,
    getCountries,
    setSelectedCountry,
    getCities,
    setSelectedCity,
    selectedCity,
    selectedCountry,
    getUsers,
    deleteUser
  };
  return (
    <AppContext.Provider value={providerUtils}>{children}</AppContext.Provider>
  );
};
