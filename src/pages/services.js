import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Layout, SEO, Hero } from '../components';

function ServicesPage({ data: { allSanityService } }) {
  return (
    <Layout>
      <SEO title="Services" />
      <HeroSection />
      {allSanityService.nodes.map((service) => (
        <h2 key={service.id}>
          {service.heading.map((heading, index) => (
            <>
              <span>{heading}</span>
              {index !== service.heading.length - 1 && <br />}
            </>
          ))}
        </h2>
      ))}
    </Layout>
  );
}

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

function HeroSection() {
  return (
    <Hero>
      <div className="text-center">
        <h1 className="heading-1">Services</h1>
      </div>
    </Hero>
  );
}

export const query = graphql`
  {
    allSanityService {
      nodes {
        _rawBody
        heading
        heroImage {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        id
        mainImage {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
        title
      }
    }
  }
`;

export default ServicesPage;
