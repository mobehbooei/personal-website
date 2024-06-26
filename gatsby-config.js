const basePath = `/`
const contentPath = `content/`
const showThemeLogo = false
const theme = `gh-inspired`

module.exports = {
  siteMetadata: {
    author: `Matt Behbooei`,
    description: `Matt Behbooei - AWS Certified Solutions Architect, Certified Kubernetes Administrator, Legacy Director at Women Who Code Vancouver`,
    keywords: 'Toronto, software engineer, senior software engineer, solutions architect, software architect, CKA, Kubernetes, AWS, Amazon Web Services, GCP, Google Cloud Platform, Women Who Code',
    locale: `en`,
    showThemeLogo,
    siteUrl: 'https://www.mattbehbooei.com',
    title: `Matt Behbooei - Senior Software Engineer & Solutions Architect`,
    formspreeEndpoint: `https://formspree.io/f/mrgrpkyy`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(require(`./tailwind.config`)(theme)),
          require(`postcss-input-range`),
          require(`autoprefixer`),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath,
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-0F1Q8V2FGN`,
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matt Behbooei - Senior Software Engineer & Solutions Architect`,
        short_name: `Matt Behbooei`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
