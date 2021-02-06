import React from 'react';
import { graphql, Link } from 'gatsby';
import BlockContentToReact from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';

import { Layout, SEO, Hero, Service } from '../components';
import { useGraphQL } from '../hooks';

function ServicesPage({ data: { allSanityService } }) {
  return (
    <Layout>
      <SEO title="Classes" />
      <HeroSection />
      <GeneralPainting />
      {allSanityService.nodes.map((service, index) => (
        <Service
          key={service.id}
          image={service.mainImage?.asset.fluid}
          slug={`/classes/${service.slug.current}/`}
          reverse={index % 2 !== 0}
        >
          <Link to={`/classes/${service.slug.current}/`}>
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
  const { classes } = useGraphQL();
  return (
    <Hero image={classes.childImageSharp.fluid}>
      <div className="text-center">
        <h1 className="heading-1">Our Classes</h1>
      </div>
    </Hero>
  );
}

function GeneralPainting() {
  return (
    <Service slug="/classes/general-painting/" reverse>
      <Link to="/classes/general-painting/">
        <h2 className="font-bold heading-2 text-burnt-orange">
          General Painting
        </h2>
      </Link>
      <div className="prose">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          vero, quis voluptatibus debitis libero minus eum nisi, aut iste
          commodi consequuntur cupiditate tempore praesentium saepe delectus
          voluptates error nemo? Libero.
        </p>
        <p>
          Dolorem magnam reprehenderit eveniet ea corrupti. Quam voluptas quo
          est iure pariatur praesentium? Expedita voluptas voluptatum eius
          corporis eligendi quos ipsam hic itaque optio asperiores libero,
          incidunt perferendis harum sit?
        </p>
        <ul>
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
          <li>Sit</li>
        </ul>
      </div>
    </Service>
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
