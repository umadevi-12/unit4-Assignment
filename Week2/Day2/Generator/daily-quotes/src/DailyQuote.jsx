import React, { useState, useEffect } from 'react';
import './DailyQuote.css';

function DailyQuote() {
  const [quote, setQuote] = useState({ content: '', author: '' });

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote({ content: data.content, author: data.author });
    } catch (error) {
      console.error('Failed to fetch quote:', error);
      setQuote({ content: 'Could not fetch quote.', author: 'Unknown' });
    }
  };

  useEffect(() => {
    fetchQuote();

    const interval = setInterval(() => {
      fetchQuote();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-container">
      <div className="quote-box">
        <p className="quote-content">"{quote.content}"</p>
        <p className="quote-author">— {quote.author}</p>
        <button onClick={fetchQuote} className="quote-button">Get New Quote</button>
      </div>
    </div>
  );
}

export default DailyQuote;
