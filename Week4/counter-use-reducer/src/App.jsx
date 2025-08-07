import React, { useReducer } from "react";
import './index.css';

const reducer = (state,action) =>{
   switch(action.type){
     case 'INCREMENT':
       return{count : state.count+1}
     case "DECREMENT":
      return {count:state.count-1}
     default:
      return state;
   }
};

const intitalState = {count : 0};

function App(){
  const[state,dispatch] = useReducer(reducer,intitalState);

  return (
    <div className="container">
      <h1>Counter : {state.count}</h1>
      <div className="buttons">
        <button onClick={() => dispatch({type:"INCREMENT"})} style={{backgroundColor:'green'}}>INCREMENT</button>
        <button onClick={() => dispatch({type:"DECREMENT"})} style={{backgroundColor:'red'}}>DECREMENT</button>
      </div>

    </div>
  )
}
export default App;