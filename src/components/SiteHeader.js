import React from "react"
import styled from "@emotion/styled"
import theme from "../styles/Theme"

const HeaderComponent = styled.header`
  margin-top: 50px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  h1 {
    color: ${theme.colors.black};
    font-family: ${theme.fonts.Rubik};
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    text-align: center;

    span {
      font-size: 24px;

      @media (min-width: 768px) {
        font-size: 48px;
      }

      &.bracket {
        color: ${theme.colors.red};
      }

      &.brace {
        color: ${theme.colors.blue};
      }

      &.brand {
        display: inline-block;
        font-size: 24px;
        letter-spacing: 3px;
        text-transform: uppercase;

        @media (min-width: 768px) {
          font-size: 44px;
        }
      }
    }
  }
`

const SiteHeader = () => (
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

export default SiteHeader
