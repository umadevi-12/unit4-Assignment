import React, { useReducer } from "react";
import { themeReducer,intitalState } from "./ThemeReducer";
import './index.css';
function App(){
  const[state,dispatch] = useReducer(themeReducer,intitalState);

  const themeStyles = {
    backgroundColor : state.theme === 'light' ? 'white':'black',
    color : state.theme === 'light' ? 'black' : 'white',
    minHeight:'100vh',
    display : 'flex',
    flexDirection : 'column',
    justifyContent:'center',
    alignItem:'center'
  };

   return (
    <div style={themeStyles}>
    
      <header className="header">
        <button
          className="toggle-btn"
          onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
          Toggle Theme
        </button>
      </header>

    
      <main className="main-content">
        <h1>{state.theme.toUpperCase()} MODE</h1>
      </main>
    </div>
  );
}

export default App;