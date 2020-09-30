import React from 'react';

import { Layout, SEO, Hero } from '../components';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <HeroSection />
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
