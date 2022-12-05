import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const List = ({ countries, cities }) => {
  const { setSelectedCountry, setSelectedCity } = useContext(AppContext);
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleCityChange = (event)=>{
    setSelectedCity(event.target.value)
  }

  return (
    <>
      <select onChange={handleChange}>
        <option value="">Select country</option>
        {countries &&
          countries.map((e) => {
            return (
              <option value={e.country_name} key={e.country_name}>
                {e.country_name}
              </option>
            );
          })}
      </select>
      <select name="" id="" onChange={handleCityChange}>
      <option value="">Select city</option>
        {cities && cities.map((e) => {
          return <option value={e.state_name} key={e.state_name}>{e.state_name}</option>
        })}
      </select>
    </>
  );
};
