
import React, { useState, useEffect, useCallback } from "react";
import Post from "./Post";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

 
  const addPost = () => {
    if (!title || !body) return;
    setPosts((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        body,
        verifyPost: false,
      },
    ]);
    setTitle("");
    setBody("");
  };

  const toggleVerify = useCallback((id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">⏱ Timer: {timer}s</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-3 mb-3 w-80 rounded shadow"
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="border p-3 mb-4 w-80 rounded shadow"
      />
      <button
        onClick={addPost}
        className="bg-blue-500 text-white px-6 py-3 rounded  fully shadow hover:bg-blue-600 transition-colors mb-6"
      >
        Add Post
      </button>

      <div className="space-y-4 w-full max-w-xl">
        {posts.map((post) => (
          <Post key={post.id} post={post} toggleVerify={toggleVerify} />
        ))}
      </div>
    </div>
  );
}
