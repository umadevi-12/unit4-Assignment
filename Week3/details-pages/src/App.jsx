import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import PostDetails from "./pages/PostDetails";
import About from "./pages/About";

function App(){
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path ='/' element = {<Home/>}/>
      <Route path ='/post/:id' element = {<PostDetails/>}/>
      <Route path = '/about' element = {<About/>}/>
    </Routes>
    </>
  )
}
export default App;