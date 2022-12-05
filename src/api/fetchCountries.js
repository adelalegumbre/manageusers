import axios from 'axios';
import React from 'react';

export const fetchCountries = async (token) => {
  const resp = await axios.get(
    'https://www.universal-tutorial.com/api/countries/',
    {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": 'application/json',
      },
    }
  );
  return resp.data
};
