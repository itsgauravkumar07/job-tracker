import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Siginup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Siginup />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
