'use client'

import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    purple: '#46239d',
    yellow: '#fec802',
    darkPurple: '#2D3748', // Using a dark slate/purple for deep backgrounds
    white: '#FFFFFF',
    50: '#E9D8FD',
    100: '#D6BCFA',
    500: '#46239d', // Main Purple
    600: '#361b7a', // Darker Purple for hover
    900: '#46239d', // Deepest Purple
    yellow500: '#e0af00', // Darker yellow for hover
    yellow400: '#fec802', // Main Yellow
  },
}

const fonts = {
  heading: 'var(--font-heading)',
  body: 'var(--font-body)',
}

const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 'none', // Geometric feel
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorScheme === 'yellow' ? 'brand.yellow400' : 'brand.500',
          color: props.colorScheme === 'yellow' ? 'gray.900' : 'white',
          _hover: {
            bg: props.colorScheme === 'yellow' ? 'brand.yellow500' : 'brand.600',
          },
        }),
      },
    },
    Heading: {
      baseStyle: {
        textTransform: 'uppercase',
        color: 'brand.900',
      },
    },
  },
})

export default theme
