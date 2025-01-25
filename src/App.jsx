import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'; // Create a Home component or use existing
import { NewWorkFlowFormFillout } from "./form-fillout.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="workFlow" element={< NewWorkFlowFormFillout />}/>
    </Routes>
  );
}

export default App;
