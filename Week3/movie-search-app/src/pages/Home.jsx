import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (import.meta.env.DEV) {
    console.log("OMDb API Key Loaded:", import.meta.env.VITE_OMDB_API_KEY);
  }

  const SearchMovies = async (title) => {
    if (!title.trim()) {
      setError('Please enter a movie title.');
      setMovies([]);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${encodeURIComponent(title)}`
      );
      const result = await response.json();

      if (result.Response === 'True') {
        setMovies(result.Search);
      } else {
        setError(result.Error || 'No results found.');
        setMovies([]);
      }
    } catch (error) {
      setError('Something went wrong while fetching data.');
      setMovies([]);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>Movie Search App</h1>

      <SearchBar onSearch={SearchMovies} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {Array.isArray(movies) &&
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Home;
