import React, { useState } from "react";
import { useChat } from "../context/ChatContext";

export const ChatInput: React.FC = () => {
  const { addUserMessage, addAssistantMessage } = useChat();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    addUserMessage(input);
    const userMessage = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GEMINI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gemini-1.5-flash",
            messages: [{ role: "user", content: userMessage }],
            temperature: 0.7,
          }),
        }
      );

      const data = await res.json();
      const assistantReply = data?.candidates?.[0]?.content || "No response";
      addAssistantMessage(assistantReply);
    } catch (err) {
      console.error(err);
      addAssistantMessage("Error: Unable to get response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
        style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend} disabled={loading} style={{ padding: "10px" }}>
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
};
