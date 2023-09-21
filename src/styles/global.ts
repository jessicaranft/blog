import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue}
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    line-height: 160%;
    font-weight: 400;
  }

  a, button {
    text-decoration: none;
    transition: opacity .2s;
  }

  a:hover,
  button:hover {
    opacity: 0.8;
  }
`
