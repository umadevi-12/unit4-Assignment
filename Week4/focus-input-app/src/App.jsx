import React, { useRef, useState } from "react";
import './App.css';


function App(){
  const inputRef = useRef(null);
  const[focused , setFocused ] = useState(false);
  
  const handlefocus = () =>{
    if(inputRef.current){
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = 'yellow';
      setFocused(true);
    }
  };

    return(
      <div className="app-container">
          <input ref={inputRef} type = "text" placeholder="click button focus!" style={{padding:'10px',fontSize : '16px', width:'250px'}}/>
          <br></br>
          <button onClick={handlefocus}>Focus Input</button>
          <br></br>
          {focused && <p style={{color : 'green', textAlign : 'center'}}>Focused! </p>}
      </div>
    )
}
export default App;