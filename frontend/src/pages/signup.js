import React, {useState} from "react";


const SignUp = () => {
    const[action,setAction] = useState("RIDEmory");
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
                    {action}
                </div>
                <p className="small-text">Welcome! Let's get started!</p>
                <form id="sign-in">
                    <input className = "email" id="email" placeholder="Email" type="email"/>
                    <input className = "password" id="password" placeholder="Password"/>
                    <button oneClick={()=>{setAction("Sign Up")}} className = "sign-up-button">Sign Up</button>
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
        console.log(password);
    })
}

export default SignUp