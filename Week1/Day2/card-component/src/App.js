import React from 'react';
import Card from './Card';


function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Reusable Card Example</h1>

      <Card title="Card 1">
        <p>This is the content of Card 1.</p>
      </Card>

      <Card title="Card 2">
        <ul>
          <li>Item A</li>
          <li>Item B</li>
        </ul>
      </Card>

      <Card title="Card 3">
        <button>Click Me</button>
      </Card>
    </div>
  );
}

export default App;
