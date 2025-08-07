import React ,{useReducer}from "react";
import './index.css';

const render = (state,action) =>{
  switch(action.type){
    case 'TOGGLE_VISIBILITY':
      return{isVisible : !state.isVisible};
    default:
      return state;
  }
};
  const intitalState = {isVisible : false};

  function App(){
    const [state,dispatch] = useReducer(render,intitalState);

    return(
      <div className="container">
        <h1>Togggle Visibility</h1>
        <button onClick={() =>dispatch({type:'TOGGLE_VISIBILITY'})}>Toggle Message</button>
         {state.isVisible && <p className="message">Hello,World!</p>}
        </div>
    )
}
export default App;