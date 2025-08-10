import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const MatchCard = ({ match, isFavorite, onToggleFavorite }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} boxShadow="md">
      <Text fontWeight="bold" fontSize="lg">
        {match.team1} vs {match.team2}
      </Text>
      <Text>Venue: {match.venue}</Text>
      <Text>Date: {match.date}</Text>
      <Text>Winner: {match.matchWinner}</Text>
      <Button
        size="sm"
        mt={2}
        colorScheme={isFavorite ? 'yellow' : 'gray'}
        onClick={onToggleFavorite}
      >
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </Button>
    </Box>
  );
};

export default MatchCard;
