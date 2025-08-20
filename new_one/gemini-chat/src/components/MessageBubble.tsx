import React from "react";
import type { Message } from "../context/ChatContext";

interface Props{
    message:Message;
}

export const MessageBubble:React.FC<Props> = ({message}) =>{
    const isUser = message.role === 'user';

    return(
      <div 
      style={{
        display:'flex',
        justifyContent:isUser ? 'flex-end':'flex-start',
        margin: '5px 0',
      }}>
        <div
        style={{
          background: isUser ? "#4CAF50" : "#eee",
          color: isUser ? "#fff" : "#000",
          padding: "10px",
          borderRadius: "10px",
          maxWidth: "70%",
        }}
      >
        <p style={{margin:0}}>{message.text}</p>
        <small style={{fontSize:'10px',opacity:0.7}}>
            {new Date(message.timestamp).toLocaleTimeString()}
        </small>
        </div>
        </div>
    )
}