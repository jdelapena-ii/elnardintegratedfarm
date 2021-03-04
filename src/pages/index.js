import React from 'react';
import { Link } from 'gatsby';
import { nanoid } from 'nanoid';
import GatsbyImage from 'gatsby-image';

import {
  Layout,
  SEO,
  Hero,
  OurStory,
  IconsGrid,
  ContactSection,
  GoogleMap,
} from '../components';
import { useGraphQL } from '../hooks';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      {/* <OurStory /> */}
      <OurServices />
      <IconsGrid />
      <MoreOfWhatWeOffer />
      <ContactSection />
      <GoogleMap />
    </Layout>
  );
}

function HeroSection() {
  const { manPlotting } = useGraphQL();
  return (
    <Hero image={manPlotting.childImageSharp.fluid}>
      <div className="w-full space-y-4 text-center">
        <h1 className="text-3xl italic uppercase sm:text-4xl">
          Get in touch and visit
          <br />
          <span className="heading-1">in the farm</span>
        </h1>
        <Link to="/contact/" className="button">
          Contact Us
        </Link>
      </div>
    </Hero>
  );
}

function OurServices() {
  // const { organicVegetables, fertilizers, organicConcoctions } = useGraphQL();
  const services = [
    {
      label: 'Organic Vegetables',
    },
    {
      label: 'Organic Fertilizers',
    },
    {
      label: 'Organic Concoctions',
    },
  ];

  return (
    <article className="relative bg-light-gray">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-center heading-2 text-burnt-orange">
          Our Service Classes
        </h2>
        <ul className="grid gap-6 mt-3 md:grid-cols-3">
          {services.map((service) => (
            <li key={nanoid()} className="w-full max-w-sm mx-auto">
              <div className="relative h-0 aspect-ratio-square">
                <div className="absolute inset-0 bg-white">
                  {/* Image goes here */}
                </div>
              </div>
              <h3
                dangerouslySetInnerHTML={{ __html: service.label }}
                className="mt-1 text-sm tracking-wider text-center uppercase"
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function MoreOfWhatWeOffer() {
  const services = [
    {
      label: 'Organic Chickens',
    },
    {
      label: 'Organic Hogs',
    },
    {
      label: 'Organic Small <br /> Ruminants',
    },
  ];
  return (
    <article className="relative bg-white">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-center heading-2 text-burnt-orange">
          More of What We Offer
        </h2>
        <ul className="grid gap-6 mt-3 md:grid-cols-3">
          {services.map((service) => (
            <li key={nanoid()} className="w-full max-w-sm mx-auto">
              <div className="relative h-0 aspect-ratio-3/4">
                <ul className="absolute inset-0 bg-sky-blue">
                  {/* Image goes here */}
                </ul>
              </div>
              <h3
                dangerouslySetInnerHTML={{ __html: service.label }}
                className="mt-1 text-sm tracking-wider text-center uppercase"
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default IndexPage;
