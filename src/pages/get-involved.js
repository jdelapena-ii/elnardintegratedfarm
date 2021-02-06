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
      <SEO title="Get Involved" />
      <HeroSection />
      <ContactSection />
      <WhatWeOffer />
      <GoogleMap />
    </Layout>
  );
}

function HeroSection() {
  const { getInvolved } = useGraphQL();
  return (
    <Hero image={getInvolved.childImageSharp.fluid}>
      <div className="text-center">
        <h1 className="heading-1">Get Involved</h1>
      </div>
    </Hero>
  );
}

export default ContactPage;
