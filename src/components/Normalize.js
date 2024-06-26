import React from "react"
import { Global, css } from "@emotion/react"

const Normalize = () => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
        font-size: 18px;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      ol,
      ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
      }

      ol,
      ul {
        list-style: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }
    `}
  />
)

export default Normalize
