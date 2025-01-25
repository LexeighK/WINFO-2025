import React from 'react';

const Dashboard = ({ user }) => {
    return (
        <body>
            <div id="root"></div>
            <script type="module" src="src/index.js"></script>
            <div>
                <h1>Tutorial Landing Page</h1>
                <p>Welcome! Create and view tutorials below. </p>
                <ul>
                    <button onclick="location.href='create.html'">Create Tutorials</button>
                <button button onclick="location.href='view.html'">Receive Tutorials</button>
                </ul>
            </div>
        </body>
    );
};

export default Dashboard;


