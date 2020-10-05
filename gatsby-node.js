/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // Query for all pages
  const result = await graphql(`
    {
      allSanityService(sort: { fields: _createdAt, order: DESC }) {
        nodes {
          slug {
            current
          }
        }
      }
      allSanityGeneralPaintingPage {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  // Iterate over all services and create a new page using a template
  const services = result.data.allSanityService.nodes;
  services.forEach((service) => {
    const slug = service.slug.current;
    createPage({
      path: `/services/${slug}/`,
      component: path.resolve(`./src/templates/service.js`),
      context: {
        slug,
      },
    });
  });

  // Create General Painting page
  const generalPainting = result.data.allSanityGeneralPaintingPage.nodes;
  generalPainting.forEach((node) => {
    const slug = node.slug.current;
    createPage({
      path: `/services/${slug}/`,
      component: path.resolve(`./src/templates/general-painting.js`),
      context: {
        slug,
      },
    });
  });
};
