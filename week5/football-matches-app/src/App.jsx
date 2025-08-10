import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMatches, toggleFavorite, setFilter } from './redux/matchesSlice';
import { Box, Spinner, SimpleGrid, Input, Select, Text } from '@chakra-ui/react';
import MatchCard from './components/MatchCard';

const App = () => {
  const dispatch = useDispatch();
  const { footballMatches, isLoading, isError, favorites, filter } = useSelector(state => state.matches);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  const filteredMatches = footballMatches.filter(match => {

    const searchLower = filter.search.toLowerCase();
    const teamMatch = !filter.teamName || match.team1 === filter.teamName || match.team2 === filter.teamName;
    const dateMatch = !filter.date || match.date === filter.date;
    const outcomeMatch = !filter.outcome || match.matchWinner === filter.outcome;
    const searchMatch =
      match.team1.toLowerCase().includes(searchLower) ||
      match.team2.toLowerCase().includes(searchLower) ||
      match.venue.toLowerCase().includes(searchLower);

    return teamMatch && dateMatch && outcomeMatch && searchMatch;
  });

  if (isLoading) return <Spinner size="xl" />;
  if (isError) return <Text color="red.500">Error loading matches.</Text>;

  return (
    <Box p={5}>
      
      <Input
        placeholder="Search by team, venue, date..."
        mb={4}
        value={filter.search}
        onChange={e => dispatch(setFilter({ search: e.target.value }))}
      />


      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {filteredMatches.map(match => (
          <MatchCard
            key={match.id}
            match={match}
            isFavorite={favorites.includes(match.id)}
            onToggleFavorite={() => dispatch(toggleFavorite(match.id))}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default App;
