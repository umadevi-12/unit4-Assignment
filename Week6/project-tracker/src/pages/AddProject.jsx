import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProject } from "../api/firebase";

function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await addProject({ title, description });
    navigate("/dashboard"); // redirect to dashboard after adding
  };

  return (
    <div>
      <h1>Add Project</h1>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={handleSubmit}>Add Project</button>
    </div>
  );
}

export default AddProject;
