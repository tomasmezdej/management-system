import { extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components

// to apply add  theme={theme} to <ChakraProvider> in App.jsx
export const theme = extendBaseTheme({
  components: {
    Button,
  },
  colors: {
    // test: "orangered"
  }
})