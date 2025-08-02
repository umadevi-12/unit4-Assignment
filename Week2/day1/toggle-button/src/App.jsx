
import React from 'react';
import ToggleButton from './components/ToggleButton';
import './App.css'

function App() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Toggle Button Example</h1>
      <ToggleButton label="Power:" />
    </div>
  );
}

export default App;

