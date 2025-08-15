import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProjects, updateProject } from "../api/firebase";

function EditProject() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true); // show loading while fetching
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjects();
        const project = data[id];
        if (project) {
          setTitle(project.title);
          setDescription(project.description);
        } else {
          setError("Project not found");
        }
      } catch (err) {
        setError("Failed to fetch project");
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  const handleUpdate = async () => {
    if (!title.trim() || !description.trim()) {
      setError("Title and Description cannot be empty");
      return;
    }

    try {
      await updateProject(id, { title, description });
      navigate("/dashboard");
    } catch {
      setError("Failed to update project");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Project</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleUpdate}>Update Project</button>
    </div>
  );
}

export default EditProject;
