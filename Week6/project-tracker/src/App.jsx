import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />
        <Route
          path="/add-project"
          element={<PrivateRoute><AddProject /></PrivateRoute>}
        />
        <Route
          path="/edit-project/:id"
          element={<PrivateRoute><EditProject /></PrivateRoute>}
        />
        <Route
          path="/project/:id"
          element={<PrivateRoute><ProjectDetails /></PrivateRoute>}
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
