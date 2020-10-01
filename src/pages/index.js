import React from 'react';
import { Link } from 'gatsby';

import {
  Layout,
  SEO,
  Hero,
  OurStory,
  IconsGrid,
  ContactSection,
  GoogleMap,
} from '../components';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <OurStory />
      <OurServices />
      <IconsGrid />
      <MoreOfWhatWeOffer />
      <ContactSection />
      <GoogleMap />
    </Layout>
  );
}

function HeroSection() {
  return (
    <Hero>
      <div className="w-full space-y-4 text-center">
        <h1 className="text-3xl italic uppercase sm:text-4xl">
          Get in touch for <br />
          <span className="heading-1">a free quote</span>
        </h1>
        <Link to="/contact/" className="button">
          Contact Us
        </Link>
      </div>
    </Hero>
  );
}

function OurServices() {
  const services = [
    {
      label: 'Restorations',
    },
    {
      label: 'General Painting',
    },
    {
      label: 'New Homes',
    },
  ];

  return (
    <article className="relative bg-light-gray">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-center heading-2 text-burnt-orange">
          Our Services
        </h2>
        <div className="grid gap-6 mt-3 md:grid-cols-3">
          {services.map((service) => (
            <div className="w-full max-w-sm mx-auto">
              <div className="relative h-0 aspect-ratio-square">
                <div className="absolute inset-0 bg-white">
                  {/* Image goes here */}
                </div>
              </div>
              <h3
                dangerouslySetInnerHTML={{ __html: service.label }}
                className="mt-1 text-sm tracking-wider text-center uppercase"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function MoreOfWhatWeOffer() {
  const services = [
    {
      label: 'Commercial <br/>Painting',
    },
    {
      label: 'Concrete Epoxy <br/>Flooring',
    },
    {
      label: 'Rendering',
    },
  ];
  return (
    <article className="relative bg-white">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-center heading-2 text-burnt-orange">
          More of What We Offer
        </h2>
        <div className="grid gap-6 mt-3 md:grid-cols-3">
          {services.map((service) => (
            <div className="w-full max-w-sm mx-auto">
              <div className="relative h-0 aspect-ratio-3/4">
                <div className="absolute inset-0 bg-sky-blue">
                  {/* Image goes here */}
                </div>
              </div>
              <h3
                dangerouslySetInnerHTML={{ __html: service.label }}
                className="mt-1 text-sm tracking-wider text-center uppercase"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default IndexPage;
