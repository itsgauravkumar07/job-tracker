import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';
import EditJob from './pages/EditJob';
import './App.css'
import ProtectedRoute from './routes/ProtectedRoute';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

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

       <Route path='/editjob/:id' element={
        <ProtectedRoute>
          <EditJob />
        </ProtectedRoute>
        } 
      />
    </Routes>
  )
}

export default App
