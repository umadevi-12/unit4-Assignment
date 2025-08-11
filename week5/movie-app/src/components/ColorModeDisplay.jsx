
import React from 'react';
import { useBreakpointValue, Box } from '@chakra-ui/react';

const ColorModeDisplay = () => {
  const colorMode = useBreakpointValue({ base: 'light', md: 'dark' });

  return <Box>Current Color Mode: {colorMode}</Box>;
};

export default ColorModeDisplay;
