import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/User";
import { Link } from "react-router-dom";
import "./sigin.css";

export default function Signin() {
    const dispatch = useDispatch();
    const uservalue = useSelector((i) => i.user)
    const [formData, setFormData] = useState({ mail: "", phone: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ email: formData.mail, phone: formData.phone, password: formData.password }));
        console.log("Email :", uservalue[0]);
        
        alert("Sign-in successful!");
        setFormData({ mail: "", phone: "", password: "" });
    };

    return (
        <div className="sigin-container">
            <div className="sigin-box">
                <h1>Welcome to the Site</h1>
                <h2>Fill in the details below to create an account</h2>
                <form onSubmit={handleSubmit}>
                    <label>Enter the Email:</label>
                    <input type="email" name="mail" value={formData.mail} onChange={handleChange} placeholder="Enter your email" />

                    <label>Enter the Phone Number:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />

                    <label>Enter the Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />

                    <button type="submit">Sign In</button>
                </form>

                <h3>If you already have an account, click below</h3>
                <Link to="/login">Go to Login</Link>
            </div>
        </div>
    );
}
