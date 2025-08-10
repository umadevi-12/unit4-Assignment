import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <Container maxW="md" mt={10}>
      <Box p={6} boxShadow="lg" borderRadius="md" bg="white">
        <Heading mb={4} textAlign="center">
          Redux Todo App
        </Heading>
        <TodoInput />
        <TodoList />
      </Box>
    </Container>
  );
}

export default App;
