import React from 'react';

import { Layout, SEO, Hero } from '../components';

function ServicesPage() {
  return (
    <Layout>
      <SEO title="About" />
      <HeroSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <Hero>
      <div className="text-center">
        <h1 className="heading-1">Services</h1>
      </div>
    </Hero>
  );
}

export default ServicesPage;
