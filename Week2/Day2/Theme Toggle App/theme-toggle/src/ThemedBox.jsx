import React from "react";

function themebox({theme}){
    const styles = {
        padding :'20px',
         margin: "10px 0",
         borderRadius: "8px",
         textAlign: "center",
         width :'500px',
         backgroundColor: theme === "light" ? "white" : "black",
         color: theme === "light" ? "black" : "white",
         border: theme === "light" ? "1px solid light gray" : "1px solid gray"
  };
    return <div style = {styles}>These is a {theme} toggle theme box</div>
    
}
export default themebox;