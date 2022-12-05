import axios from 'axios';
import React from 'react';

export const fetchCities = async (token, country) => {
  const resp = await axios.get(
    `https://www.universal-tutorial.com/api/states/${country}`,
    {
      headers: {
        "Authorization":`Bearer ${token}`,
        "accept":"application/json"
      }, 
    }
  );
 return resp.data
};
