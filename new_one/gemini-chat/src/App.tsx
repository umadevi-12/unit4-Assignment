import React from "react";
import { ChatProvider } from "./context/ChatContext";
import { ChatWindow } from "./components/ChatWindow";
import { ChatInput } from "./components/ChatInput";

const App: React.FC = () => {
  return (
    <ChatProvider>
      <div
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Gemini AI Chat</h1>
        <ChatWindow /> {/* No children */}
        <ChatInput />  {/* Add input here */}
      </div>
    </ChatProvider>
  );
};

export default App;
