import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [filterOption, setFilterOption] = useState('');
  
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const fetchMemes = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get('https://api.imgflip.com/get_memes');
      const memeData = res.data.data.memes;
      setMemes(memeData);
      setFilteredMemes(memeData);
    } catch (err) {
      setError('Failed to fetch memes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let updated = [...memes];

  
    if (searchTerm) {
      updated = updated.filter((meme) =>
        meme.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    
    if (filterOption === 'width') {
      updated = updated.filter((meme) => meme.width > 500);
    } else if (filterOption === 'height') {
      updated = updated.filter((meme) => meme.height > 500);
    }

   
    if (sortOption === 'name') {
      updated.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'width') {
      updated.sort((a, b) => a.width - b.width);
    }

    setFilteredMemes(updated);
  }, [searchTerm, sortOption, filterOption, memes]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSortOption('');
    setFilterOption('');
    setFilteredMemes(memes);
  };

  return (
    <div className={`App ${theme}`}>
      <h1>Meme Explorer</h1>
      <div className="controls">
        <button onClick={fetchMemes}>Load Memes</button>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Sort</option>
          <option value="name">By Name</option>
          <option value="width">By Width</option>
        </select>
        <select value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
          <option value="">Filter</option>
          <option value="width">Width  500</option>
          <option value="height">Height 500</option>
        </select>
        <button onClick={resetFilters}>Reset</button>
        <button onClick={toggleTheme}>
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      {loading && <div className="spinner">Loading memes...</div>}
      {error && <div className="error">{error}</div>}

      {!loading && !error && filteredMemes.length === 0 && (
        <div className="no-results">No memes found.</div>
      )}

      <div className="grid">
        {filteredMemes.map((meme) => (
          <div className="card" key={meme.id}>
            <img src={meme.url} alt={meme.name} />
            <h4>{meme.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
