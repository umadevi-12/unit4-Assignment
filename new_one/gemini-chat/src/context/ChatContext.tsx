import React,{createContext,useContext,useState,useEffect} from "react";

export interface Message {
    role:'user' | 'assistant';
    text:string;
    timestamp:string;
}

interface ChatContextType{
    message:Message[];
    addUserMessage:(text:string) => void;
    addAssistantMessage:(text:string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{children:React.ReactNode}> = ({children}) =>{
    const [message,setMessage] = useState<Message[]>(() =>{
        const saved = localStorage.getItem('chatMessage');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() =>{
        localStorage.setItem('chatMessage',JSON.stringify(message));
    },[message]);

    const addUserMessage = (text: string) =>{
        setMessage(prev => [...prev,{role:'user',text,timestamp:new Date().toISOString()}]);
    };
    const addAssistantMessage = (text: string) =>{
        setMessage(prev => [...prev,{role:'assistant',text,timestamp:new Date().toISOString()}])
    };

    return (
        <ChatContext.Provider value={{message,addUserMessage,addAssistantMessage}}>
            {children}
        </ChatContext.Provider>
    )
}

export const useChat = () =>{
    const context = useContext(ChatContext);
    if(!context) throw new Error("useChat must be used within ChatProvider");
    return context;
}