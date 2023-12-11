module.exports = {
  siteMetadata: {
    title: `Vedanshu Joshi`,
    description: `Hello,I'm Vedanshu Joshi`,
    author: `Vedanshu Joshi`,
    siteUrl: `https://vedanshujoshi.com`,
    keywords:"Vedanshu Joshi,vedanshu,joshi"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#172a45`,
        theme_color: `#172a45`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-CFPWZ43SP8", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://fenilkaneria.com',
        policy: [{ userAgent: '*', allow: '/' }],
        sitemap: null,
      }
    },
    `gatsby-plugin-netlify`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
