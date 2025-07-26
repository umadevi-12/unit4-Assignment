

import React, { useState } from 'react';

let vanillaCount = 0;

function App() {
  const [reactCount, setReactCount] = useState(0); 

  const handleVanillaTitleChange = () => {
    vanillaCount++; 
    document.title = `Vanilla Title ${vanillaCount}`;

  };

  const handleReactTitleChange = () => {
    const newCount = reactCount + 1;
    setReactCount(newCount); 
    document.title = `React Title ${newCount}`;
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Virtual DOM vs Real DOM</h1>

      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={handleVanillaTitleChange}
          style={{
            marginRight: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#f0ad4e',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Change Title (Vanilla JS)
        </button>
        <span>Vanilla DOM Updates: {vanillaCount}</span> 
      </div>

      <div>
        <button
          onClick={handleReactTitleChange}
          style={{
            marginRight: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#5cb85c',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Change Title (React)
        </button>
        <span>React DOM Updates: {reactCount}</span>
      </div>
    </div>
  );
}

export default App;
