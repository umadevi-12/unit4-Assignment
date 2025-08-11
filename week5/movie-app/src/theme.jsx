
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: '#ff6347' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
