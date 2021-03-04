import React from 'react';
import { graphql, Link } from 'gatsby';
import BlockContentToReact from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';

import { Layout, SEO, Hero, Service } from '../components';
import { useGraphQL } from '../hooks';

function ServicesPage() {
  return (
    <Layout>
      <SEO title="Classes" />
      <HeroSection />
      <OrganicVegetables />
      <OrganicFertilizers />
      <OrganicConcoctions />
      <OrganicChickens />
      <OrganicHogs />
      <OrganicSmallRuminants />
    </Layout>
  );
}

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

function OrganicVegetables() {
  const { organicVegetables } = useGraphQL();
  return (
    <Service
      image={organicVegetables.childImageSharp.fluid}
      slug="/classes/organic-vegetables/"
    >
      <Link to="/classes/organic-vegetables/">
        <h2 className="font-bold heading-2 text-burnt-orange">
          Organic Vegetables
        </h2>
      </Link>
      <div className="prose">Lorem ipsum</div>
    </Service>
  );
}

function OrganicFertilizers() {
  const { fertilizers } = useGraphQL();
  return (
    <Service
      image={fertilizers.childImageSharp.fluid}
      slug="/classes/organic-fertilizers/"
      reverse
    >
      <Link to="/classes/organic-vegetables/">
        <h2 className="font-bold heading-2 text-burnt-orange">
          Organic Fertilizers
        </h2>
      </Link>
      <div className="prose">Lorem ipsum</div>
    </Service>
  );
}

function OrganicConcoctions() {
  const { organicConcoctions } = useGraphQL();
  return (
    <Service
      image={organicConcoctions.childImageSharp.fluid}
      slug="/classes/organic-concoctions/"
    >
      <Link to="/classes/organic-concoctions/">
        <h2 className="font-bold heading-2 text-burnt-orange">
          Organic Concoctions
        </h2>
      </Link>
      <div className="prose">Lorem ipsum</div>
    </Service>
  );
}

function OrganicChickens() {
  const { nativeChicken } = useGraphQL();
  return (
    <Service
      image={nativeChicken.childImageSharp.fluid}
      slug="/classes/organic-chickens/"
      reverse
    >
      <Link to="/classes/organic-chickens/">
        <h2 className="font-bold heading-2 text-burnt-orange">
          Organic Chickens
        </h2>
      </Link>
      <div className="prose">Lorem ipsum</div>
    </Service>
  );
}

function OrganicHogs() {
  const { organicHog } = useGraphQL();
  return (
    <Service
      image={organicHog.childImageSharp.fluid}
      slug="/classes/organic-hogs/"
    >
      <Link to="/classes/organic-hogs/">
        <h2 className="font-bold heading-2 text-burnt-orange">Organic Hogs</h2>
      </Link>
      <div className="prose">Lorem ipsum</div>
    </Service>
  );
}

function OrganicSmallRuminants() {
  const { nativeCattle } = useGraphQL();
  return (
    <Service
      image={nativeCattle.childImageSharp.fluid}
      slug="/classes/organic-ruminants/"
      reverse
    >
      <Link to="/classes/organic-ruminants/">
        <h2 className="font-bold heading-2 text-burnt-orange">
          Organic Small Ruminants
        </h2>
      </Link>
      <div className="prose">Lorem ipsum</div>
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
