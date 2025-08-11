// src/App.jsx
import {
  Box,
  Image,
  Text,
  Heading,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

function App() {
  const bg = useColorModeValue('white', 'gray.700');

  return (
    <Box
      minH="100vh"
      bg={useColorModeValue('gray.100', 'gray.800')}
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
    >
      <Box
        maxW="sm"
        bg={bg}
        borderRadius="lg"
        boxShadow="lg"
        overflow="hidden"
        p={6}
        textAlign="center"
        transition="all 0.3s"
        _hover={{ boxShadow: 'xl', transform: 'scale(1.02)' }}
      >
        <VStack spacing={4}>
          <Heading size="md">Beautiful Chakra UI Card</Heading>
          <Image
            borderRadius="full"
            boxSize="120px"
            src="https://source.unsplash.com/random/200x200"
            alt="Random image"
            objectFit="cover"
          />
          <Text color="gray.600">
            This card is built using Chakra UI. It has responsive styles,
            hover effects, and a clean layout.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default App;
