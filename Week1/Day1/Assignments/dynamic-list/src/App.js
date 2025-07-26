import React from 'react';

function App() {
  const items = ['React', 'JavaScript', 'CSS'];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>My Tech Stack</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ fontSize: '18px' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
