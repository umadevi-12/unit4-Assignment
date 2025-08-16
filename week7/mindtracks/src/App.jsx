import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentPage from "./pages/StudentPage";
import MentorPage from "./pages/MentorPage";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/student" element={<StudentPage/>}/>
        <Route path="/mentor" element={<MentorPage/>}/>
        <Route path="*" element={<StudentPage/>}/>
      </Routes>
      <ToastContainer position="top-right"/>
    </BrowserRouter>
  );
}
