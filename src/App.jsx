import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { NewWorkFlowFormFillout } from "./form-fillout"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

function App() {
    return(
        <Routes>
            <Route path="workFlow" element={<NewWorkFlowFormFillout/>} />
        </Routes>
    )
}

export default App;