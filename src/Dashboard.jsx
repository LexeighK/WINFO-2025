import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center" id="root"></div>
            <script type="module" src="src/index.js"></script>

            <div>
                <h1>Welcome to Bee Wise!</h1>
                <ul className="justify-content-center">
                    <Link className="btn btn-primary m-3 mb-5" to="/createTutorial">Create Tutorials</Link>
                    <Link className="btn btn-primary m-3 mb-5">Receive Tutorials</Link>
                </ul>
                <LogoutButton />
            </div>
        </div>
    );
};

export default Dashboard;

