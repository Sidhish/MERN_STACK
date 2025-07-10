import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./login.css"; 

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }
    localStorage.setItem("userData", JSON.stringify({ username, password }));
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
          <p>Don't have an account ?<NavLink to ="/signup">signup</NavLink></p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
