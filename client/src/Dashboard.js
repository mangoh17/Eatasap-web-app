
import { useState } from "react";

export default function (props) {
    const [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
    return (
        <div className="Dash-form-container">
            <form className="Dash-form">
                <div className="Dash-form-content">
                <h3 classname="Dash-form-title">Sign In</h3>
                <label>Email Address</label>
                <input
                type="email"
                placeholder="Enter email"
                />
                </div>
                <div>
                    <label>Password</label>
                    <input
                    type="password"
                    placeholder="Enter Password"
                    />
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
                <p className="forgot-password">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
            </form>
        </div>
    )

}

    return (
        <div className ="Dash-form-container">
            <form className="Dash-form">
                <div className="Dash-form-content">
                    <h3 classname="Dash-form-title">Sign In</h3>
                    <div>
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign in
                        </span>
                    </div>
                    <div>
                        <label>Full Name</label>
                        <input
                        type="text"
                
                        placeholder="e.g John Doe"
                        />
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input
                        type="email"
                        
                        placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                        type="password"
                        
                        placeholer="Password"
                        />
                    </div>
                    <div>
                        <button type="submit"
                        >
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
            </form>
        </div>
    )
}

