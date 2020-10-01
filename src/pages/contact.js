import React from 'react';

import {
  Layout,
  SEO,
  Hero,
  ContactSection,
  WhatWeOffer,
  GoogleMap,
} from '../components';

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

export default ContactPage;
