import { createRoot } from "react-dom/client"
import App from './App.jsx';
import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)