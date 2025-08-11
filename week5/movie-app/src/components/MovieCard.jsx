import { Box, Image, Text } from '@chakra-ui/react';

function MovieCard({ movie }) {
  const imgUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450';

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imgUrl} alt={movie.title} />
      <Box p="4">
        <Text fontWeight="bold">{movie.title}</Text>
        <Text fontSize="sm">{movie.release_date}</Text>
      </Box>
    </Box>
  );
}

export default MovieCard;
