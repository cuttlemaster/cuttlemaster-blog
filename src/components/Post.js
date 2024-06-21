import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "@emotion/styled"
import theme from "../styles/Theme"

const PostComponent = styled.div`
  margin-bottom: 100px;
`

const PostHeader = styled.div`
  position: relative;
  padding-top: 25px;

  span {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px 15px 3px 15px;
    background-color: ${theme.colors.gray};
    color: ${theme.colors.htmlBG};
    font-family: ${theme.fonts.Rubik};
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
  }
`

const CoverImage = styled.img`
  float: left;
  margin-top: 6px;
  margin-right: 25px;
  margin-bottom: 20px;
  max-width: 200px;
  width: 100%; /* ensures the image respects the max-width */
  height: auto; /* ensures the image maintains aspect ratio */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
`

const Post = ({ title, date, coverArtURL, content }) => (
  <PostComponent>
    <PostHeader>
      <h2>{title}</h2>
      <span>{date}</span>
    </PostHeader>

    <CoverImage src={coverArtURL} alt={title} />
    <div>{documentToReactComponents(JSON.parse(content))}</div>
  </PostComponent>
)

export default Post
