import React from 'react';

import { Layout, SEO, Hero, ContactSection, GoogleMap } from '../components';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <HeroSection />
      <ContactSection />
      <WhatWeOffer />
      <GoogleMap />
    </Layout>
  );
}

function HeroSection() {
  return (
    <Hero>
      <div className="text-center">
        <h1 className="heading-1">Contact Us Today</h1>
      </div>
    </Hero>
  );
}

function WhatWeOffer() {
  const services = [
    {
      label: 'Restorations',
    },
    {
      label: 'New Homes',
    },
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
        <div className="grid gap-6 mt-3 md:grid-cols-5">
          {services.map((service) => (
            <div className="w-full max-w-sm mx-auto">
              <div className="relative h-0 aspect-ratio-square">
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

export default ContactPage;
