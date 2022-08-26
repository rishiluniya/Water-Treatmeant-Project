import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Pages/Home';
import Bill from './Pages/Bill';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/bill" element={<Bill />} />
    </Routes>

  );
}

export default App;
