require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Cuttlemaster | A Blog About Things`,
    description: `Blogs used to be the backbone of the internet and this is one man's attempt at having a place that can bring that feeling back.`,
    author: `Caleb Flanagan`,
    siteUrl: `https://cuttlemaster.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT_ID,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
  ],
}
