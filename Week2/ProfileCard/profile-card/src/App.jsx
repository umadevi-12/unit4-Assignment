import { useState } from 'react'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  return (
    <div >
      <ProfileCard name = "masai" age = {40} bio = "full stack web developer and the online traning students  "/>
      <ProfileCard/>
    </div>
    
  )
}

export default App;
