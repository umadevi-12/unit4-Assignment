import React , {useReducer , useState} from "react";

const initialState = {
  email : '',
  password : '',
};

function fromReducer(state,action){
  switch(action.type){
    case 'email':
      return {...state, email : action.payload};
    case 'password':
      return {...state, password : action.payload}
    case 'reset':
      return initialState;
    default:
      throw new error('invaild action type');
  }
}
function App(){
  const [state,dispatch] = useReducer(fromReducer,initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('From Submited')
    setSubmitted(true);
  };

  const handleReset = (e) =>{
    dispatch({type : 'reset'});
    setSubmitted(false);
  };

  return (
    <div style={{padding : '20px', alignItems:'center', marginBottom : '100%', justifyContent:'center' }}>
      <h2>USer Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email: </label>
          <input type = 'email' value = {state.email} onChange={(e) => dispatch({type:'email',payload:e.target.value})
          }
          required
          />
          <br></br>
          <label>Password: </label>
          <input type = 'password'  placeholder = '******'value={state.password} onChange={(e) =>dispatch({type:'password' ,payload:e.target.value})
          }
          required
          />
        </div>
        <button type = 'submit' >Submit</button>{' '}
        {!submitted ? (
          <div >No Details</div>
        ):(
          <div>
            <div>User Email : {state.email}</div>
            <div>User Password : {state.password}</div>
          </div>
        )}
      </form>
    </div>
  )
}
export default App;