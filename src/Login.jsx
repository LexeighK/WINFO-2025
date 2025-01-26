// src/Login.jsx
import React from 'react';
// import { Footer } from './Navigation.jsx';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { auth } from './firebaseConfig.js';

const Login = ({ user }) => {
    const authenticator = auth;

    // An object of configuration values
    const firebaseUIConfig = {
        signInOptions: [
            {
                provider: EmailAuthProvider.PROVIDER_ID,
                requiredDisplayName: true
            },
            GoogleAuthProvider.PROVIDER_ID,
        ],
        signInFlow: 'popup', // Don't redirect to authenticate
        credentialHelper: 'none', // Don't show the email account chooser
        callbacks: { // "lifecycle" callbacks
            signInSuccessWithAuthResult: () => {
                return false; // Don't redirect after authentication
            }
        }
    };

    if (user !== null) {
        return <Navigate to="../dashboard" replace />;
    }

    return (
        <>
            <div className="dashboardHeader">
                <h1>Welcome to Bee Wise!</h1>
                <p>Log in to get started!</p>
            </div>
            <div className="container minHeight">
                <StyledFirebaseAuth
                    firebaseAuth={authenticator}
                    uiConfig={firebaseUIConfig}
                />
            </div>
            {/* <Footer /> */}
        </>
    );
};
export default Login;



// // src/Login.jsx
// import React from 'react';
// // import { Footer } from './Navigation.jsx';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
// import { Navigate } from 'react-router-dom';
// import { auth } from './firebaseConfig.js';

// const Login = ({ user }) => {
//     const authenticator = auth;

//     // An object of configuration values
//     const firebaseUIConfig = {
//         signInOptions: [
//             {
//                 provider: EmailAuthProvider.PROVIDER_ID,
//                 requiredDisplayName: true
//             },
//             GoogleAuthProvider.PROVIDER_ID,
//         ],
//         signInFlow: 'popup', // Don't redirect to authenticate
//         credentialHelper: 'none', // Don't show the email account chooser
//         callbacks: { // "lifecycle" callbacks
//             signInSuccessWithAuthResult: () => {
//                 return false; // Don't redirect after authentication
//             }
//         }
//     };

//     if (user !== null) {
//         return <Navigate to="../dashboard" replace />;
//     }

//     return (
//         <>
//             <div className="dashboardHeader">
//                 <h1>Welcome to Bee Wise!</h1>
//                 <p>Log in to get started!</p>
//             </div>
//             <div className="container minHeight">
//                 <StyledFirebaseAuth
//                     firebaseAuth={authenticator}
//                     uiConfig={firebaseUIConfig}
//                 />
//             </div>
//             {/* <Footer /> */}
//         </>
//     );
// };
// export default Login;
