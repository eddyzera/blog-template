import { extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  colors: {
    black: '#1A202C',
    white: '#FFF'
  },

  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Open Sans, sans-serif',
    mono: 'system-ui, sans-serif'
  },

  styles: {
    global: {

      'html, body': {
        fontSize: '16px',
        bg: 'white',
        fontFamily: 'body',
        margin: 0,
        padding: 0,
        boxSize: 'border-box'
      },

      button: {
        cursor: 'pointer'
      },

      h1: {
        fontFamily: 'heading',
        color: 'black',
        fontSize: '4rem',
        fontWeight: '700'
      },

      h2: {
        fontFamily: 'heading',
        color: 'black',
        fontSize: '2rem',
        fontWeight: '700'
      },

      h3: {
        fontFamily: 'heading',
        color: 'black',
        fontSize: '2rem',
        fontWeight: '500'
      },

      p: {
        fontFamily: 'mono',
        color: '#a0aec0'
      },

      a: {
        fontFamily: 'mono',
        color: '#a0aec0',
        textDecoration: 'none'
      }
    }
  }
})

export default customTheme
