import { Box, Heading, Text, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function ResponsiveUI() {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} color={color} minH="100vh" p={8}>
      <Heading mb={4}>Hello Chakra UI + Responsive UI</Heading>
      <Text mb={6}>Resize your window and toggle theme to test responsiveness.</Text>
      <Button onClick={toggleColorMode}>Toggle Theme</Button>
    </Box>
  );
}
