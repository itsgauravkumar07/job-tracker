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

  const[jobApplication, setJobApplication] = useState([]);

  function handleDelete(index){
    const updateJobApp = jobApplication.filter((_, i)=> i !== index);
    setJobApplication(updateJobApp);
  }

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      <Route path='/dashboard' element={
        <ProtectedRoute>
          <Dashboard jobApplication={jobApplication} handleDelete={handleDelete}/>
        </ProtectedRoute>
        } 
      />

      <Route path='/addjob' element={
        <ProtectedRoute>
          <AddJob setJobApplication={setJobApplication}/>
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
