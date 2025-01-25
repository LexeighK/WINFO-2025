import React from 'react';
import Login from './Login.jsx'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route path="/login" element={<Login user={user} />} />
        <Route path="/" element={<Login user={user} />} />
      </Routes>
      
    </div>
  );
};

export default App;