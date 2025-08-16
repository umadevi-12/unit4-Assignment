// src/Post.jsx
import React, { useMemo } from "react";

// React.memo prevents unnecessary re-renders
const Post = React.memo(({ post, toggleVerify }) => {
  const { id, title, body, verifyPost } = post;

  // useMemo to generate random background color only once per post
  const bgColor = useMemo(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b},0.2)`;
  }, []);

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="p-4 rounded shadow"
    >
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{body}</p>
      <button
        onClick={() => toggleVerify(id)}
        className={`mt-2 px-4 py-1 rounded ${
          verifyPost ? "bg-green-500 text-white" : "bg-gray-300"
        }`}
      >
        {verifyPost ? "Verified" : "Verify"}
      </button>
    </div>
  );
});

export default Post;
