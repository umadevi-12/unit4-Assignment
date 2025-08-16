import React from "react";
import FormComponent from "./components/FormComponent";
import ToggleComponent from "./components/ToggleComponent";
import  './index.css';
export default function App() {
  return (
    <div style={{ padding: "20px",  color:'blue'}}>
      <h1>Custom Hooks Demo</h1>
      <br></br>
      <FormComponent />
      <br />
      <ToggleComponent />
    </div>
  );
}
