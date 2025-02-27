import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx'; // Assuming you have a Dashboard component
import { NewWorkFlowFormFillout } from './form-fillout.jsx'; // Assuming you have a NewWorkFlowFormFillout component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState('');
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/login" element={<Login user={user} />} />
          <Route path="/" element={<Login user={user} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createTutorial" element={<NewWorkFlowFormFillout />} />
        </Routes>
      </div>
    
  );
}

export default App;