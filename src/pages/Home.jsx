import React from 'react';
import { Link } from 'react-router-dom';


export const Home = () => { 

  return (
    <div>
       <h1>Home</h1>
      <h2>
        <Link to={'/createUser'}>Create User</Link>
      </h2>
      <h2>
        <Link to={'/searchUsers'}>Search Users</Link>
      </h2>
    </div> 
  );
};
