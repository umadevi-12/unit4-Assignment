import React from "react";
import { useForm } from "../hooks/useForm";

export default function FormComponent() {
  const { values, handleChange, resetForm } = useForm({
    username: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${values.username}, Email: ${values.email}`);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <div style={{fontSize:'20px', color:'black'}}>
        <label>Username: </label>
        <input
          name="username"
          value={values.username}
          onChange={handleChange}
          placeholder="Enter username"
        />
      </div>
      <br></br>
      <div style={{fontSize:'20px', color:'black'}}>
        <label>Email: </label>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
