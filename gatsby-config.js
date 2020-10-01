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
const siteUrl = 'https://www.joeyspainting.com.au';

// Check what node environment is running for Sanity plugin
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title,
    description: '',
    author: '',
    siteUrl,
    phone: '0435 525 154',
    email: 'info@joeyspainting.com.au',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
    address: {
      line1: 'Port Macquarie',
      line2: 'NSW 2444',
    },
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
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ehfeq8sa',
        dataset: 'production',

        // Set to `true` in order for drafts to replace their published version. By default, drafts will be skipped.
        overlayDrafts: !isProd,

        // Set to `true` to keep a listener open and update with the latest changes in realtime. If you add a `token` you will get all content updates down to each keypress.
        watchMode: !isProd,

        // Authentication token for fetching data from private datasets, or when using overlayDrafts
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
};
