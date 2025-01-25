import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

// For INFO 340 I (Lexeigh) coded something very similar to this so it is on my mind

// Allows for editable sections
function SubTextArea({info, getVal, section}) {
    return (
        <div>
            <textarea
                className="form-control"
                placeholder="Write info here"
                value={info}
                onChange={(e) => {
                    getVal(e.target.value);
                }}>
            </textarea>
            <label>{section}</label>
        </div>
    )
}

export function NewWorkFlowFormFillout() {
    const [title, setTitle] = useState("")
    const [instructions, setInstructions] = useState("");
    const [selectedFiles, setSelectedFiles] = useState("");

    // for photo uploading

    // for having multiple sections

    // for adding and removing sections

    // mapping each individual section

    // map the steps

    // map the image

    // create into a firebase storable object

    // submit the thing


    return(
        <div>
            <main>
                <h1>Create a Workflow</h1>
                <form>
                    <div className="containter">
                        <div className="row">
                            <div className="col-12 col-md-5 col-lg-4 col-xl-3 bg-light p-3 border-end">
                                <SubTextArea  info={title} getVal={(val) => setTitle(val)} />
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
} 