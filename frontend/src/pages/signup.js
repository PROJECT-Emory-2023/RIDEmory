import React from "react";

const SignUp = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}
        >
            
            <div className = "sign-up-info"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div className="ride-emory">
                {/* <img className="icon" src="../../pe-logo-w-border-small.png"> */}
                    RIDEmory hello hi
                </div>
                <p className="small-text">Welcome! Let's get started!</p>
                <input className = "email" placeholder="Email" type="email"/>
                <input className = "password" placeholder="Password"/>
                <button className = "sign-up-button">Sign Up</button>
            </div>
        </div>
    );
};

export default SignUp