import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'; // Create a Home component or use existing

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
