import { useState } from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import { CreateUser } from './pages/CreateUser';
import { Home } from './pages/Home';
import { SearchUsers } from './pages/SearchUsers';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/searchUsers" element={<SearchUsers />} />
        <Route path="/" element={<Home />} /> 
      </Routes>
    </div>
  );
}

export default App;
