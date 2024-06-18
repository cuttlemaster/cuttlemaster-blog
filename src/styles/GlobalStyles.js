import React from "react"
import { Global, css, useTheme } from "@emotion/react"

const GlobalStyles = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap");

        html {
          background-color: ${theme.colors.mainBG};
        }
      `}
    />
  )
}

export default GlobalStyles
