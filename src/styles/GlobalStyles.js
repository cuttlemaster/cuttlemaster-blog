import React from "react"
import { Global, css, useTheme } from "@emotion/react"

const GlobalStyles = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap");

        html {
          background-color: ${theme.colors.htmlBG};
        }

        h2 {
          margin-bottom: 15px;
          padding: 5px 0 5px 0;
          color: ${theme.colors.gray};
          font-family: ${theme.fonts.Rubik};
          font-size: 36px;
          line-height: 42px;
        }

        p {
          margin-bottom: 25px;
          color: ${theme.colors.gray};
          font-family: ${theme.fonts.PTSerif};
          font-size: 20px;
          line-height: 30px;
          text-align: justify;
        }
      `}
    />
  )
}

export default GlobalStyles
