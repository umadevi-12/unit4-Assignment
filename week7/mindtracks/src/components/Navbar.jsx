import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#4f46e5", color: "#fff" }}>
      <Link to="/student" style={{ marginRight: "1rem", color: "#fff" }}>Student</Link>
      <Link to="/mentor" style={{ color: "#fff" }}>Mentor</Link>
    </nav>
  );
}
