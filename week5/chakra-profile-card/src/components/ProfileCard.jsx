
import {
  Box,
  Avatar,
  Badge,
  Heading,
  Text,
  HStack,
  Button,
  Flex,
} from '@chakra-ui/react';

const ProfileCard = () => (
  <Box
    maxW="sm"
    mx="auto"
    p={6}
    bg="white"
    borderRadius="lg"
    boxShadow="lg"
    textAlign="center"
  >
    
    <Box position="relative" display="inline-block">
      <Avatar
        size="xl"
        name="Lindsey James"
        src="https://via.placeholder.com/150"
      />
      <Box
        position="absolute"
        bottom="0"
        right="0"
        w={4}
        h={4}
        bg="green.400"
        border="2px solid white"
        borderRadius="full"
      />
    </Box>

 
    <Heading mt={4} fontSize="xl">
      Lindsey James
    </Heading>
    <Text color="gray.500" fontSize="sm">
      @lindsey_jam3s
    </Text>

   
    <Text mt={2} mb={4} fontSize="sm" px={2}>
      Actress, musician, songwriter and artist. PM for work inquiries or{' '}
      <Text as="span" color="blue.500">
        #tag
      </Text>{' '}
      me in your posts.
    </Text>

    {/* Tags */}
    <HStack spacing={2} justify="center" mb={4}>
      {['#ART', '#PHOTOGRAPHY', '#MUSIC'].map((tag) => (
        <Badge key={tag} colorScheme="gray" variant="outline">
          {tag}
        </Badge>
      ))}
    </HStack>

    <Flex justify="center" gap={3}>
      <Button variant="outline" colorScheme="blue">
        Message
      </Button>
      <Button colorScheme="blue">Follow</Button>
    </Flex>
  </Box>
);

export default ProfileCard;
