import React from 'react';
import Login from './Login.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css';


function App() {
    con
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/" element={<Login user={user} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
    </div>
  );
};

export default App;