import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("successfully signed out");
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error.message);
        }
    };

return (
        <button 
            onClick={handleLogout}
            style={{
                padding: "10px 20px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >Logout</button>
    );
};

export default LogoutButton;