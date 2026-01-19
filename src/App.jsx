import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Siginup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';
import './App.css'
import ProtectedRoute from './routes/ProtectedRoute';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Siginup />} />

      <Route path='/dashboard' element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
        } 
      />

      <Route path='/addjob' element={
        <ProtectedRoute>
          <AddJob />
        </ProtectedRoute>
        } 
      />

       <Route path='/addjob' element={
        <ProtectedRoute>
          <AddJob />
        </ProtectedRoute>
        } 
      />
    </Routes>
  )
}

export default App
