
import React, { useState } from 'react';

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(0);

  const increment = () => 
    setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="counter-box">
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
