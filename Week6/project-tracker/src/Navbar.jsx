import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();        // clear auth state
    navigate("/");   // redirect to login page
  };

  return (
    <nav>
      <h1>Project Tracker</h1>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
