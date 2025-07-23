import type { Theme } from '@types'
import { pxToRem } from '@utils'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme?: Theme }>`
  body, html {
    background: ${(props) => props.theme.appBackground};
    color: ${(props) => props.theme.appColor};
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }

  h1, h2, p, ul, li, figure {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin-bottom: ${pxToRem(16)};
  }
`
