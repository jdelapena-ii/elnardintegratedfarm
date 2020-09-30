import React from 'react';

import { Layout, SEO, Hero } from '../components';

function RenderingPage() {
  return (
    <Layout>
      <SEO title="Rendering" />
      <HeroSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <Hero>
      <div className="text-center">
        <h1 className="heading-1">Rendering</h1>
      </div>
    </Hero>
  );
}

export default RenderingPage;
