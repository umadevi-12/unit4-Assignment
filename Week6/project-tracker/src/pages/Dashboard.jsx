import React, { useEffect, useState } from "react";
import { getProjects, deleteProject } from "../api/firebase";
import { Link } from "react-router-dom";

function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
      setProjects(data ? Object.entries(data) : []);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteProject(id);
    setProjects(projects.filter(([key]) => key !== id));
  };

  return (
    <div>
      <h1>Projects</h1>
      <Link to="/add-project">Add New Project</Link>
      {projects.map(([id, project]) => (
        <div key={id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <Link to={`/project/${id}`}>View Tasks</Link>
          <Link to={`/edit-project/${id}`} style={{ marginLeft: "10px" }}>Edit</Link>
          <button onClick={() => handleDelete(id)} style={{ marginLeft: "10px" }}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
