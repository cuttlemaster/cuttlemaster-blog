import React from "react"
import { CacheProvider, ThemeProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import { cache as emotionCache } from "@emotion/css"
import Normalize from "./src/components/Normalize"
import GlobalStyles from "./src/styles/GlobalStyles"
import theme from "./src/styles/Theme"

const cache = createCache({ key: "cuttlemaster" })

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </CacheProvider>
)

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
