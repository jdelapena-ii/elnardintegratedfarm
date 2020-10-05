import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { nanoid } from 'nanoid';
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

function GeneralPainting({ data: { generalPaintingPage } }) {
  return (
    <Layout>
      <SEO title={generalPaintingPage.title} />
      <HeroSection generalPaintingPage={generalPaintingPage} />
      <GeneralPaintingCopy generalPaintingPage={generalPaintingPage} />
      <GeneralPaintingServices generalPaintingPage={generalPaintingPage} />
      <WhatWeOffer />
      <IconsGrid />
      <ContactSection />
      <GoogleMap />
    </Layout>
  );
}

GeneralPainting.propTypes = {
  data: PropTypes.object.isRequired,
};

function HeroSection({ generalPaintingPage }) {
  return (
    <Hero image={generalPaintingPage.heroImage?.asset.fluid}>
      <div className="text-center">
        <h1 className="heading-1">{generalPaintingPage.title}</h1>
      </div>
    </Hero>
  );
}

HeroSection.propTypes = {
  generalPaintingPage: PropTypes.object.isRequired,
};

function GeneralPaintingCopy({ generalPaintingPage }) {
  return (
    <article className="relative px-4 py-32 md:py-48 sm:px-6 lg:px-8 bg-burnt-orange">
      <div className="absolute inset-0 inline-block py-6 mx-auto space-y-3 text-center text-gray-200 md:py-20">
        <h2 className="font-bold heading-2">General Painting</h2>
        <SanityBlockContent
          className="mx-auto prose text-white"
          blocks={generalPaintingPage._rawBody}
        />
      </div>
    </article>
  );
}

GeneralPaintingCopy.propTypes = {
  generalPaintingPage: PropTypes.object.isRequired,
};

function GeneralPaintingServices({ generalPaintingPage }) {
  return generalPaintingPage.services.map((service, index) => (
    <Service
      key={nanoid()}
      image={service.mainImage?.asset.fluid}
      reverse={index % 2 === 0}
    >
      <h2 className="pb-4 font-bold heading-2 text-burnt-orange">
        {service.heading.map((heading, i) => (
          <Fragment key={nanoid()}>
            <span>{heading}</span>
            {i !== service.heading.length - 1 && <br />}
          </Fragment>
        ))}
      </h2>
      <SanityBlockContent className="prose" blocks={service._rawBody} />
    </Service>
  ));
}

GeneralPaintingServices.propTypes = {
  generalPaintingPage: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    generalPaintingPage: sanityGeneralPaintingPage(
      slug: { current: { eq: $slug } }
    ) {
      _rawBody
      heroImage {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      services {
        _rawBody
        heading
        mainImage {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      title
    }
  }
`;

export default GeneralPainting;
