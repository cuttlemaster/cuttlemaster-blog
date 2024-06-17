import React from "react"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import { cache as emotionCache } from "@emotion/css"
import "normalize.css"

const cache = createCache({ key: "cuttlemaster" })

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={emotionCache}>{element}</CacheProvider>
)
