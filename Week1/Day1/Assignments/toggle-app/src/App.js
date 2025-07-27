import React,{useState} from 'react';

function App(){
  const [color,setColor] = useState('green');

  const toggleColor = () =>{
    setColor(prevColor => (prevColor === 'green' ? 'yellow' : 'green'));

  };

  const buttonStyle = {
    backgroundColor : color,
    color: color === 'green' ? 'white' : 'black',
    padding : '15px 25px',
    fontSize:'16px',
    border:'none',
    borderRadius:'6px',
    cursor:'pointer',

  };

  return(
    <div style = {{textAlign:'center',marginTop:'50px'}}>
      <button onClick = {toggleColor} style ={buttonStyle}>
        Color:{color.charAt(0).toUpperCase() + color.slice(1)}
      </button>
      <p style = {{fontSize : '18px',marginTop:'20px'}}>
        prev Color:{color.charAt(0).toUpperCase()+color.slice(1)}
      </p>
    </div>
  )
}

export default App;
