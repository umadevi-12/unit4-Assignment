import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function ThemeToggleOnly() {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.100", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Box
      bg={bg}
      color={color}
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Button onClick={toggleColorMode}>Toggle Theme</Button>
    </Box>
  );
}
