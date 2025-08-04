import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";

function App(){
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/data' element = {<Data/>}/>
      </Routes>
    </Router>
  )
}
export default App;