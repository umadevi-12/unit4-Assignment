import React,{useEffect,useRef} from "react";
import { useChat } from "../context/ChatContext";
import { MessageBubble } from "./MessageBubble";

export const ChatWindow:React.FC =() =>{
    const {message} = useChat();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() =>{
        containerRef.current?.scrollTo({top:containerRef.current.scrollHeight,behavior:'smooth'});

    },[message])

    return (
        <div
         ref={containerRef} 
         style={{
            border:'1px solid white',
            borderRadius:'10px',
            height:'400px',
            overflowY:'auto',
            padding:'10px',
            marginBottom:'10px',
         }}  
        >
        {message.map((msg,i) =>(
            <MessageBubble key = {i} message={msg}/>
        ))}

        </div>
    )
}