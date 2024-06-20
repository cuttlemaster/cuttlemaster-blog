import React from "react"
import { graphql } from "gatsby"
import MainContainer from "../components/MainContainer"
import Header from "../components/Header"
import Post from "../components/Post"

const IndexPage = ({ data }) => {
  // const posts = data.allContentfulPost.nodes

  return (
    <MainContainer>
      <Header />
      <Post />
    </MainContainer>
  )
}

// export const query = graphql`
//   query {
//     allContentfulPost {
//       nodes {
//         id
//         title
//         publishDate(formatString: "MMMM DD, YYYY")
//         coverImage {
//           title
//           file {
//             url
//           }
//         }
//         content {
//           content {
//             content {
//               value
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default IndexPage
