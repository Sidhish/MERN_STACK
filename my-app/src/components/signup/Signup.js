import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./signup.css";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // if(!name || !email || !password || !confirmPassword){
    //   alert("Required Feilds are Empty");
    //   return;
    // }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("User already exists");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      createdAt: Date.now(),
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    navigate("/products");
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
      <p>Already have an account? <NavLink to="/login" className="link">Login</NavLink></p>
    </div>
  );
}

export default Signup;
