import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';
import './App.css'; // Make sure to import the CSS

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <h1>Redux Counter App (Vite)</h1>
      <h2>Current Count: {count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <h3>State (Stringified):</h3>
      <pre>{JSON.stringify({ count }, null, 2)}</pre>
    </div>
  );
}

export default App;
