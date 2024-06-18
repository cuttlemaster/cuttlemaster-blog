import React from "react"
import styled from "@emotion/styled"
import theme from "../styles/Theme"

const HeaderComponent = styled.header`
  padding-top: 25px;
  padding-bottom: 25px;

  h1 {
    font-family: ${theme.fonts.Rubik};
    font-size: 16px;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;

    span {
      font-size: 20px;

      &.bracket {
        color: ${theme.colors.red};
      }

      &.brace {
        color: ${theme.colors.blue};
      }

      &.brand {
        display: inline-block;
        padding-bottom: 15px;
        font-size: 16px;
        text-transform: uppercase;
      }
    }
  }
`

const Header = () => (
  <HeaderComponent>
    <h1>
      <span className="bracket">{`[`}</span>
      <span className="brace">{`{ `}</span>
      <span className="brand">Cuttlemaster</span>
      <span className="brace">{` }`}</span>
      <span className="bracket">{`]`}</span>
    </h1>
  </HeaderComponent>
)

export default Header
