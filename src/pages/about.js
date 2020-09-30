import React from 'react';

import { Layout, SEO, Hero, GoogleMap } from '../components';

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <HeroSection />
      <GoogleMap />
    </Layout>
  );
}

function HeroSection() {
  return (
    <Hero>
      <div className="text-center">
        <h1 className="heading-1">About Us</h1>
      </div>
    </Hero>
  );
}

export default AboutPage;
