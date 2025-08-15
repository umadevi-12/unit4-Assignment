import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();

  const handleSignup = () => {
    if (!email) return;
    login(email); // simple signup sets user
  };

  return (
    <div>
      <h1>Signup</h1>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
}

export default Signup;
