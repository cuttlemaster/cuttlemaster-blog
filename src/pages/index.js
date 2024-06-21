import React from "react"
import { graphql } from "gatsby"
import MainContainer from "../components/MainContainer"
import Header from "../components/Header"
import Post from "../components/Post"

const IndexPage = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges

  return (
    <MainContainer>
      <Header />
      {posts.map(({ node }) => (
        <Post
          key={node.id}
          title={node.title}
          date={node.date}
          coverArtURL={node.coverArt.url}
          content={node.Content.raw}
        />
      ))}
    </MainContainer>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          date(formatString: "MMMM DD, YYYY")
          coverArt {
            filename
            url
          }
          Content {
            raw
          }
        }
      }
    }
  }
`

export default IndexPage
