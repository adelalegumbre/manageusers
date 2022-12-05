import React from 'react';

import { Link } from 'react-router-dom';


export const UserList = ({ usersList, handleDelete }) => {


  return (
    <>
      { usersList && usersList.length >0 ?
        usersList.map((e) => {
          return (
            <div key={e.id} className="userCard">
              <h3>Name: {e.name}</h3>
              <h3>Last Name: {e.lastname}</h3>
              <h3>ID: {e.id}</h3>
              <h3>Country: {e.country}</h3>
              <h3>City: {e.city}</h3>
              <button onClick={() => handleDelete(e.id)}>Delete</button>
            </div>
          );
        }):'No Users created'}
        <br />
        <br />
        <Link to="/">Home</Link>
    </>
  );
};
