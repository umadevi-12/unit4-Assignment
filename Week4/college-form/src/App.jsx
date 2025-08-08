import React,{useReducer,useState,useEffect} from "react";
import{initialState,collegeReducer} from './collegeReducer';
import './App.css';

function App(){
  const [state,dispatch] = useReducer(collegeReducer,initialState);
  const [courseInput , setcourseInput] = useState('');
  const[submitted , setSubmitted] = useState(false);
   
  useEffect(() => {
    console.log('State updated:', state);
  }, [state]);

  const handleSubmit = (e) =>{
    e.preventDefault(e);
    try{
      setSubmitted(true);
    }
    catch(error){
      dispatch({type:'error',payload:error.message});
    }
  };

  const handleReset = () =>{
    dispatch({type:'reset'});
    setcourseInput('')
    setSubmitted(false)
  };

  const addCourse = () =>{
    if(courseInput.trim()){
      dispatch({type:'ADD_COURSE',payload:courseInput});
      setcourseInput('')
    }
  };

   const renderDetails = () => (
    <div>
      <h3>Submitted College Data :</h3>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );


    return(
      <div className="form-container" style={{padding:'20px'}}>
        <h2>College Form Data</h2>
        <form onSubmit = {handleSubmit}>
          <input type = 'text ' placeholder = 'College name' value = {state.name} onChange = {(e) => dispatch({type:'SET_FIELD' , field:'name' , payload:e.target.value})
          }
          />
          <input type = 'number' placeholder="Building" value={state.address.building} onChange={(e) => dispatch({type:'SET_ADDRESS_FIELD',field : 'building' , payload:e.target.value})
          }
          />
          <input type = 'text' placeholder="Street" value = {state.address.street} onChange={(e) => dispatch({type:'SET_ADDRESS_FIELD' , field:'street' , payload:e.target.value})
          }
          />
          <input type = 'text' placeholder="City" value={state.address.city.name} onChange={(e) => dispatch({type : 'SET_CITY_FIELD',field:'name',payload:e.target.value})
          }
          />
          <input type = 'text' placeholder="Pincode" value={state.address.city.locality.pincode}  onChange={(e) => dispatch({ type: 'SET_LOCALITY_FIELD', field: 'pinCode', payload: e.target.value })
          } 
         />
         <input
          type="text" placeholder="Landmark" value={state.address.city.locality.landmark} onChange={(e) => dispatch({ type: 'SET_LOCALITY_FIELD', field: 'landmark', payload: e.target.value })
          }
         />
         <input
          type="text" placeholder="Longitude" value={state.address.coordinates.longitude} onChange={(e) =>  dispatch({ type: 'SET_COORDINATES', field: 'longitude', payload: e.target.value })
          }
         />
      
        <h4>Courses Offered</h4>
         <input type="text" placeholder="Add course" value={courseInput} onChange={(e) => setCourseInput(e.target.value)}/>
         <button type = 'button' onClick={addCourse}> Add Course </button>
         <ul>
          {state.courses_offered.map((course,index) =>(
            <li key = {index}>
              {course}{' '}
              <button type = 'button' onClick={() => dispatch({type:'REMOVE_COURSE' ,index})}>
                ❌
              </button>
            </li>
          ))}
         </ul>
         <button type = 'submit'>Submit</button>
         <button type = 'button' onClick={handleReset}>Reset</button>
        </form>
        {state.error && <div style = {{color :'red'}}>Error:{state.error}</div>}
        {submitted && renderDetails()}
        
      </div>
    );
}
export default App;
