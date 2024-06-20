import React from "react"
import styled from "@emotion/styled"
import theme from "../styles/Theme"

const HeaderComponent = styled.header`
  margin-top: 100px;
  margin-bottom: 100px;

  h1 {
    color: ${theme.colors.black};
    font-family: ${theme.fonts.Rubik};
    font-size: 16px;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    text-align: center;

    span {
      font-size: 48px;

      &.bracket {
        color: ${theme.colors.red};
      }

      &.brace {
        color: ${theme.colors.blue};
      }

      &.brand {
        display: inline-block;
        font-size: 44px;
        letter-spacing: 3px;
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
