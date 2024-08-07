import React from "react"
import { graphql } from "gatsby"
import MainContainer from "../components/MainContainer"
import Header from "../components/SiteHeader"
import Post from "../components/Post"
import { Helmet } from "react-helmet"

const IndexPage = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges
  const { title, description } = data.site.siteMetadata

  return (
    <MainContainer>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      {posts
        .sort((a, b) => new Date(b.node.date) - new Date(a.node.date)) // SORT POSTS BY DATE IN DESCENDING ORDER (MOST RECENT FIRST)
        .slice(0, 5) // SLICE THE ARRAY TO GET THE FIRST 5 POSTS
        .map(({ node }) => (
          <Post
            key={node.id}
            title={node.title}
            date={node.date}
            coverArt={node.coverArt}
            content={node.Content.raw}
          />
        ))}
    </MainContainer>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
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
