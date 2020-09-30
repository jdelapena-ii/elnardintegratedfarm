const dotenv = require('dotenv');
const postCssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const resolveConfig = require('tailwindcss/resolveConfig');

const tailwindConfig = require('./tailwind.config.js');

// Get Tailwind values so we can use them in JS
const fullConfig = resolveConfig(tailwindConfig);

// Set up `dotenv` so that we can use `.env.development` and/or `.env.production` to store environment variables
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Declare variables so these values can be reused
const title = "Joey's Painting";
const siteUrl = 'https://joeyspainting.com.au';

module.exports = {
  siteMetadata: {
    title,
    description: '',
    author: '',
    siteUrl,
    phone: '0435 525 154',
    email: 'info@joeyspainting.com.au',
    address: '',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: title,
        start_url: '/',
        background_color: fullConfig.theme.colors.navy,
        theme_color: fullConfig.theme.colors.white,
        display: 'minimal-ui',
        icon: 'src/images/favicon.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          postCssImport,
          tailwindcss(tailwindConfig),
          autoprefixer,
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
      },
    },
  ],
};
