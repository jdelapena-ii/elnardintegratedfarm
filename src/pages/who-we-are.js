import React from 'react';

import {
  Layout,
  SEO,
  Hero,
  ContactSection,
  WhatWeOffer,
  GoogleMap,
} from '../components';
import { useGraphQL } from '../hooks';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Who We Are" />
      <HeroSection />
      <ContactSection />
      <WhatWeOffer />
      <GoogleMap />
    </Layout>
  );
}

function HeroSection() {
  const { whoWeAre } = useGraphQL();
  return (
    <Hero image={whoWeAre.childImageSharp.fluid}>
      <div className="text-center">
        <h1 className="heading-1">Who We Are</h1>
      </div>
    </Hero>
  );
}

export default ContactPage;
