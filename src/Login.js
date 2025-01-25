import { Footer } from './Navigation.jsx';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

export function Login(props) {
    const { user } = props;
    const authenticator = getAuth();

    //an object of configuration values
    const firebaseUIConfig = {
        signInOptions: [
            { provider: EmailAuthProvider.PROVIDER_ID,
                requiredDisplayName: true },
            GoogleAuthProvider.PROVIDER_ID,
        ],
        signInFlow: 'popup', //don't redirect to authenticate
        credentialHelper: 'none', //don't show the email account chooser
        callbacks: { //"lifecycle" callbacks
            signInSuccessWithAuthResult: () => {
                return false; //don't redirect after authentication
            }
        }
    }

    if (user !== null) {
        return <Navigate to="../dashboard" replace />
    }

    return(
        <>
        <div className="dashboardHeader">
            <h1>Login to Get Started</h1>
            <p>Welcome to Learn It Yourself -- Login or create an account to use the platform.</p>
        </div>
        <div className="container minHeight">

            <StyledFirebaseAuth
            firebaseAuth={authenticator}
            uiConfig={firebaseUIConfig}
            />

        </div>
        <Footer />
        </>
    )
}