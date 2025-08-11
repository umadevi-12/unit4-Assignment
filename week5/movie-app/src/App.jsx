import React, { useState } from 'react';
import { Box, Input, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './redux/movieSlice';
import MovieCard from './components/MovieCard';

function App() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.movies);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch(fetchMovies(query));
    }
  };

  return (
    <Box p={4}>
      <Input
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
        mb={4}
      />
      {loading && <Spinner />}
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {list.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default App;
