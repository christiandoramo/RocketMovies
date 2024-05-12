import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ${'' /* funciona no firefox */}
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.COLORS.GRAY_DARK};
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

/* Funciona no Chrome, Edge e Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  ${'' /* background: orange; */}
}

*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) =>  theme.COLORS.GRAY_DARK};
  border-radius: 20px;
  ${'' /* border: 3px solid orange; */}
}

`
