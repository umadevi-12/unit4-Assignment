import React, { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('home');

  const pageStyle = {
    home: { backgroundColor: '#e0f7fa', padding: '20px', minHeight: '100vh' },
    about: { backgroundColor: '#f1f8e9', padding: '20px', minHeight: '100vh' },
    contact: { backgroundColor: '#fce4ec', padding: '20px', minHeight: '100vh' },
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <h2>Welcome to Home</h2>;
      case 'about':
        return <h2>About Us</h2>;
      case 'contact':
        return <h2>Contact Us</h2>;
      default:
        return <h2>Page not found</h2>;
    }
  };

  return (
    <div style={pageStyle[activePage]}>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setActivePage('home')} style={{ marginRight: '10px' }}>
          Home
        </button>
        <button onClick={() => setActivePage('about')} style={{ marginRight: '10px' }}>
          About
        </button>
        <button onClick={() => setActivePage('contact')}>
          Contact
        </button>
      </nav>

      <div>{renderContent()}</div>
    </div>
  );
}

export default App;
