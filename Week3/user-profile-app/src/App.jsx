import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import { UserProvider } from "./UserContext";
import Home from "./Home";
import Profile from "./Profile";
import Settings from "./Settings";

function App(){
  return (
    <UserProvider>
      <Router>
        <nav style={{padding : '10px' , background : "#eee"}}>
          <Link to = '/' style={{marginRight:10}}>
          Home</Link>
          <Link to = '/profile' style={{marginRight:10}}>
          Profile</Link>
          <Link to = '/setting' style={{marginRight:10}}>
          Settings</Link>
        </nav>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/profile' element = {<Profile/>}/>
          <Route path = '/setting' element = {<Settings/>}/>
        </Routes>
      </Router>
    </UserProvider>
  )
}
export default App;