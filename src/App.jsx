import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { NewWorkFlowFormFillout } from "./form-fillout"

function App() {
    return(
        <Routes>
            <Route path="workFlow" element={<NewWorkFlowFormFillout/>} />
        </Routes>
    )
}

export default App;