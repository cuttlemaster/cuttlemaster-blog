import React from "react"
import { css } from "@emotion/react"

const headerStyles = css`
  background-color: #434343;
`

const Header = () => (
  <header css={headerStyles}>
    <h1>Cuttlemaster</h1>
  </header>
)

export default Header
