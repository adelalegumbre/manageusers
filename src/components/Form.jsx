import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { List } from './List';

export const Form = ({ countries, cities }) => {
  const { selectedCountry, selectedCity } = useContext(AppContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !event.target.name.value ||
      !event.target.lastname.value ||
      !event.target.id.value ||
      !selectedCountry ||
      !selectedCity
    ) {
      alert('All fields must be completed');
      return;
    }
    const newUser = {
      name: event.target.name.value,
      lastname: event.target.lastname.value,
      id: event.target.id.value,
      country: selectedCountry,
      city: selectedCity,
    };
    await axios.post("http://localhost:3001/users",{
      ...newUser
    }).then(()=>{alert("user Created ok")}).catch(()=>{alert("algo fue mal")})
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" name="name" />
      <input type="text" placeholder="lastname" name="lastname" />
      <input type="text" placeholder="ID" name="id" />
      <List countries={countries} cities={cities} />
      <button>Submit</button>
    </form>
  );
};
