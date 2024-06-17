import React from "react"
import { css } from "@emotion/react"

const headerStyle = css`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
`

const Header = () => (
  <header css={headerStyle}>
    <h1>Cuttlemaster</h1>
  </header>
)

export default Header
