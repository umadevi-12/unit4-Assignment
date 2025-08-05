import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({children}){
    const[user,setUser] = useState({
        name : 'Masai Doe',
        email : 'masai.doe@example.com',
    });

    const updateUser = (newUserData) =>{
        setUser((prev) =>({...prev,...newUserData}));
    };
   return (
    <UserContext.Provider  value = {{user,updateUser}}>
        {children}
    </UserContext.Provider>
   )
}