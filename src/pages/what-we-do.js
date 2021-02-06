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
      <SEO title="What We Do" />
      <HeroSection />
      <ContactSection />
      <WhatWeOffer />
      <GoogleMap />
    </Layout>
  );
}

function HeroSection() {
  const { whatWeDo } = useGraphQL();
  return (
    <Hero image={whatWeDo.childImageSharp.fluid}>
      <div className="text-center">
        <h1 className="heading-1">What We Do</h1>
      </div>
    </Hero>
  );
}

export default ContactPage;
