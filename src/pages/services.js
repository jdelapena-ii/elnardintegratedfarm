import React from 'react';
import { graphql, Link } from 'gatsby';
import BlockContentToReact from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';

import { Layout, SEO, Hero, Service } from '../components';

function ServicesPage({ data: { allSanityService } }) {
  return (
    <Layout>
      <SEO title="Services" />
      <HeroSection />
      {allSanityService.nodes.map((service, index) => (
        <Service
          key={service.id}
          image={service.mainImage?.asset.fluid}
          slug={`/services/${service.slug.current}/`}
          reverse={index % 2 === 0}
        >
          <Link to={`/services/${service.slug.current}/`}>
            <h2 className="font-bold heading-2 text-burnt-orange">
              {service.title}
            </h2>
          </Link>
          <div className="prose">
            <BlockContentToReact blocks={service._rawBody} />
          </div>
        </Service>
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
        <h1 className="heading-1">Our Services</h1>
      </div>
    </Hero>
  );
}

export const query = graphql`
  {
    allSanityService(sort: { order: ASC, fields: _createdAt }) {
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
