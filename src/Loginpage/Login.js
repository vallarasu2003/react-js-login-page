import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/User";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.user.users);
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const userExists = users.find((user) => user.email === loginData.email && user.password === loginData.password);
        if (userExists) {
            dispatch(loginUser(loginData));
            alert("Login Successful!");
            navigate("/dashboard"); // Redirect to a protected page
        } else {
            alert("Invalid email or password.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <label>Email:</label>
                    <input type="email" name="email" value={loginData.email} onChange={handleChange} placeholder="Enter your email" />

                    <label>Password:</label>
                    <input type="password" name="password" value={loginData.password} onChange={handleChange} placeholder="Enter your password" />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
