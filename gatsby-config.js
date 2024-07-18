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
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/favicon-32x32.png`,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-Y50MJL6QDC", // GA4 ANALYTICS ID
        ],
        pluginConfig: {
          head: true, // PUTS TRACKING SCRIPT IN THE HEAD TAG INSTEAD OF BODY TAG
          respectDNT: true, // THIS PARAMETER IS OPTIONAL
          exclude: ["/example"], // ADD PAGE PATHS TO ARRAY BELOW TO EXCLUDE FROM TRACKING
        },
        gtagConfig: {
          send_page_view: true, // ENABLES AUTOMATIC PAGE VIEW TRACKING
        },
      },
    },
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
