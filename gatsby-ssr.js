import React from "react"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import { cache as emotionCache } from "@emotion/css"

const cache = createCache({ key: "cuttlemaster" })

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={emotionCache}>{element}</CacheProvider>
)

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}
