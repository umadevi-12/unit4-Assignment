import React, { useState } from "react";

const blogs = [
  { title: "Mastering JavaScript", content: "JavaScript is a powerful language for web development." },
  { title: "React in Indian Startups", content: "React is widely used in many Indian tech companies." },
  { title: "Career in Web Development", content: "Explore job roles and growth in web development." },
];

const BlogViewer = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Blog Titles</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {blogs.map((blog, index) => (
          <li
            key={index}
            onClick={() => setSelectedBlog(blog)}
            style={{
              cursor: "pointer",
              marginBottom: "10px",
              color: "blue",
              textDecoration: "underline"
            }}
          >
            {blog.title}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "30px" }}>
        {selectedBlog ? (
          <div>
            <h3>{selectedBlog.title}</h3>
            <p>{selectedBlog.content}</p>
          </div>
        ) : (
          <p><i>Select a blog to read</i></p>
        )}
      </div>
    </div>
  );
};

export default BlogViewer;
