import React, { useState, useEffect } from 'react';
import ThemedBox from './ThemedBox';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });


  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        minHeight: '100vh'
      }}
    >
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme}> Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode </button>

      <div style={{ marginTop: '20px' }}>
        <ThemedBox theme={theme} />
        <ThemedBox theme={theme} />
        <ThemedBox theme={theme} />
      </div>
    </div>
  );
}

export default App;
