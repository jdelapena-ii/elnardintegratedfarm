import React from 'react';
import { graphql, Link } from 'gatsby';
import SanityBlockContent from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';

import {
  Layout,
  SEO,
  Hero,
  Service,
  WhatWeOffer,
  IconsGrid,
  ContactSection,
  GoogleMap,
} from '../components';

function ServicePageTemplate({ data: { sanityService } }) {
  return (
    <Layout>
      <SEO title={sanityService.title} />
      <HeroSection sanityService={sanityService} />
      <ServiceSection sanityService={sanityService} />
      <ServiceImages sanityService={sanityService} />
      <WhatWeOffer invert />
      <IconsGrid />
      <ContactSection />
      <GoogleMap />
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

function ServiceSection({ sanityService }) {
  return (
    <Service image={sanityService.mainImage?.asset.fluid} reverse>
      <Link to={`/services/${sanityService.slug.current}/`}>
        <h2 className="font-bold heading-2 text-burnt-orange">
          {sanityService.title}
        </h2>
      </Link>
      <div className="prose">
        <SanityBlockContent blocks={sanityService._rawBody} />
      </div>
    </Service>
  );
}

ServiceSection.propTypes = {
  sanityService: PropTypes.object.isRequired,
};

function ServiceImages({ sanityService }) {
  return (
    <article className="relative bg-white">
      <div className="w-full px-4 pt-8 pb-20 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {Array(8)
            .fill('')
            .map((image, index) => (
              <div key={index} className="relative h-0 aspect-ratio-square">
                <div className="absolute inset-0 bg-sky-blue">
                  {/* Image goes here */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </article>
  );
}

ServiceImages.propTypes = {
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
