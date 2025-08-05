import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";

function Settings(){
    const{user,updateUser} = useContext(UserContext);
    const[name,setName] = useState(user.name);
    const[email,setEmail] = useState(user.email);
    const[message,setMessage] = useState('');

    useEffect(()=>{
        setName(user.name);
        setEmail(user.email);
    },[user])

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateUser({name,email});
        setMessage('Profilw update Successfullt!');
        setTimeout(() =>setMessage(''),3000)
    };

    return (
    <div style={{ padding: 20 }}>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>
            Name:{" "}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
              style={{ padding: 5, width: 250 }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Email:{" "}
            <input type="email"value={email} onChange={(e) => setEmail(e.target.value)} required
              style={{ padding: 5, width: 250 }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: "8px 15px" }}>Update</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}

export default Settings;