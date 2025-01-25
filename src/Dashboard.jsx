import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div id="root"></div>
            <script type="module" src="src/index.js"></script>

            <div>
                <h1>Welcome to Bee Wise!</h1>
                <p>Create and view tutorials below. </p>
                <ul>
                    <button onClick={useNavigate('/createTutorial')}>Create Tutorials</button>
                    <button>Receive Tutorials</button>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;


