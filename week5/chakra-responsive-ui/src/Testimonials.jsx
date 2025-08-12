import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ResponsiveUI() {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.100", "gray.800");
  const navBg = useColorModeValue("white", "gray.900");
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box bg={bg} minH="100vh" p={4} color={textColor}>
      {/* Navbar */}
      <Flex
        as="nav"
        p={4}
        bg={navBg}
        boxShadow="md"
        align="center"
        borderRadius="md"
      >
        <Heading size="md">Responsive App</Heading>
        <Spacer />
        <Button size="sm" onClick={toggleColorMode}>
          Toggle Theme
        </Button>
      </Flex>

     
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={6}
        mt={8}
      >
        <Box flex="1" p={6} bg={cardBg} borderRadius="md" boxShadow="md" textAlign="center">
          <Heading size="md" mb={2}>Card One</Heading>
          <Text mb={4}>
            This card stacks vertically on mobile and horizontally on larger screens.
          </Text>
          <Button colorScheme="teal">Action 1</Button>
        </Box>

        <Box flex="1" p={6} bg={cardBg} borderRadius="md" boxShadow="md" textAlign="center">
          <Heading size="md" mb={2}>Card Two</Heading>
          <Text mb={4}>
            Chakra UI makes responsive design easy with simple props.
          </Text>
          <Button colorScheme="blue">Action 2</Button>
        </Box>

        <Box flex="1" p={6} bg={cardBg} borderRadius="md" boxShadow="md" textAlign="center">
          <Heading size="md" mb={2}>Card Three</Heading>
          <Text mb={4}>
            Resize the window to see the layout adapt seamlessly.
          </Text>
          <Button colorScheme="purple">Action 3</Button>
        </Box>
      </Stack>
    </Box>
  );
}
