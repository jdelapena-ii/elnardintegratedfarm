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
      <SEO title="Contact" />
      <HeroSection />
      <ContactSection />
      <WhatWeOffer />
      <GoogleMap />
    </Layout>
  );
}

function HeroSection() {
  const { mountainView } = useGraphQL();
  return (
    <Hero image={mountainView.childImageSharp.fluid}>
      <div className="text-center">
        <h1 className="heading-1">Contact Us</h1>
      </div>
    </Hero>
  );
}

export default ContactPage;
