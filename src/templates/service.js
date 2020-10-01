import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Layout, SEO, Hero } from '../components';

function ServicePageTemplate({ data: { sanityService } }) {
  return (
    <Layout>
      <SEO title={sanityService.title} />
      <HeroSection sanityService={sanityService} />
    </Layout>
  );
}

ServicePageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

function HeroSection({ sanityService }) {
  return (
    <Hero>
      <div className="text-center">
        <h1 className="heading-1">
          {sanityService.heading.map((heading, index) => (
            <>
              <span>{heading}</span>
              {index !== sanityService.heading.length - 1 && <br />}
            </>
          ))}
        </h1>
      </div>
    </Hero>
  );
}

HeroSection.propTypes = {
  sanityService: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    sanityService(slug: { current: { eq: $slug } }) {
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
`;

export default ServicePageTemplate;
