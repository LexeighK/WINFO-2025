import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './Login.jsx'
import './styles.css';
import { NewWorkFlowFormFillout } from "./form-fillout.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

function App() {
  return (
      <Routes>
        <Route path="createTutorial" element={< NewWorkFlowFormFillout />}/>
    </Routes>
      
  );
};

export default App;