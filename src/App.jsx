<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx'; // Assuming you have a Dashboard component
import './App.css';
=======
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './Login.jsx'
import './styles.css';
import { NewWorkFlowFormFillout } from "./form-fillout.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import Dashboard from './Dashboard.jsx';
>>>>>>> main

function App() {
<<<<<<< HEAD
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

=======
>>>>>>> main
  return (
      <Routes>
        <Route path="createTutorial" element={< NewWorkFlowFormFillout />}/>
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
      
  );
};

export default App;