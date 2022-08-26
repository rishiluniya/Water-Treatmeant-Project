import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import React, { Component }  from 'react';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>

  );
}

export default App;
