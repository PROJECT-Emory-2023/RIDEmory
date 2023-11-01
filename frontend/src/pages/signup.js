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
                {/* <img className="icon" src="../../"> */}
                    RIDEmory
                </div>
                <p className="small-text">Welcome! Let's get started!</p>
                <form id="sign-in">
                    <input className = "email" id="email" placeholder="Email" type="email"/>
                    <input className = "password" id="password" placeholder="Password"/>
                    <button className = "sign-up-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

window.onload=function(){
    const signupForm = document.querySelector('#sign-in');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        //get user info
        const email = signupForm['email'].value;
        const password = signupForm['password'].value;

        console.log(email);
        
    })
}

export default SignUp