// components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div style={{ margin: 10, border: '1px solid gray', padding: 10, width: 200 }}>
    <Link to={`/movie/${movie.imdbID}`}>
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} alt={movie.Title} width="100%" />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </Link>
  </div>
);

export default MovieCard;
