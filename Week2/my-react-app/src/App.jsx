import React from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div>
      <h1>My Counter App</h1>
      <Counter initialValue={0} />
    </div>
  );
}

export default App;
