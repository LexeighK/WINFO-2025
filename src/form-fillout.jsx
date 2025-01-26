import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

// For INFO 340 I (Lexeigh) coded something very similar to this so it is on my mind

// Allows for editable sections
function SubTextArea({info, getVal, section}) {
    return (
        <div>
            <label><strong>{section}</strong></label>
            <textarea
                className="form-control"
                placeholder={info}
                value={info}
                onChange={(e) => {
                    getVal(e.target.value);
                }}>
            </textarea>
        </div>
    )
}

export function NewWorkFlowFormFillout() {
    // Instructor can set the title
    const [title, setTitle] = useState("")
    // The written instructions
    const [instructions, setInstructions] = useState("");
    const [selectedFiles, setSelectedFiles] = useState("");
    // Steps allow for dynamic adding and removing of steps
    const [steps, setSteps] = useState([{step_ID: 1, instructions, img:""},]);

    // for photo uploading

    // for having multiple sections

    // for adding and removing sections

    // Handles the addStep button functionality
    function addStep() {
        const newStepID = steps[steps.length - 1].step_ID + 1;
        setSteps([...steps, {step_ID: newStepID, steps: ""}])
    }

    // Handles the removeStep button functionality
    function removeStep(index) {
        if (steps.length > 1) {
            setSteps((prevSteps) => {
                const newList = [...prevSteps];
                newList.splice(index, 1);
                return newList;
            })
        }
    }
    
    // map the steps - must map each step individually
    function handleMultipleStepsInstructions(index, value) {
        const updatedSteps = [...steps];
        updatedSteps[index].instructions = value;
        setSteps(updatedSteps);
    }

    // map the image
    function handleFileChangeSections(index, event) {
        const file = event.target.files[0];

        const reader = new FileReader();

        reader.onload = function (e) {
            const dataUrl = e.currentTarget.result;
            const updatedSteps = [...steps];
            updatedSteps[index].img = dataUrl;

            setSteps(updatedSteps)
        }

        reader.readAsDataURL(file);
    }

    // Handles the creation of multiple steps
    const addRemoveStep = steps.map((step, index) => {
        return (
        <div key={step.step_ID} className="card p-3 m-3">
            <h2>Step instructions</h2>
            <SubTextArea section="Instructions  " info={step.instructions} getVal={(val) => handleMultipleStepsInstructions(index, val)} />
            
            
            <div className="form-floating mt-3">
                <div className="mb-3"><label htmlFor="imageUploadInput"><strong>Drag & drop images here: </strong></label></div>
                <input
                type="file"
                name="image"
                className="file"
                id="imageUploadInput"
                multiple="multiple"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(event) => handleFileChangeSections(index, event)}
                />
                
            </div>

            <div>
                <Link className="btn btn-primary mt-3" onClick={() => removeStep(index)}>
                    <strong>Delete Step</strong>
                </Link>
            </div>
        </div>
        )
    })
        
    // mapping each individual section
    
    // create into a firebase storable object

    // submit the thing


    return(
        <div>
            <main>
                <h1>Create a Tutorial</h1>
                <form>
                    <div className="containter">
                        <div className="row">
                            <div className="col-12 col-md-5 col-lg-4 col-xl-3 bg-light p-3 border-end">
                                <SubTextArea section="Tutorial Title "  info={title} getVal={(val) => setTitle(val)} />
                            </div>
                            {addRemoveStep} 
                        </div>
                    </div>
                    <div>
                        <a className="btn btn-primary m-3 mb-5" onClick={addStep} >Add New Step</a>
                    </div>
                </form>
            </main>
        </div>
    )
} 