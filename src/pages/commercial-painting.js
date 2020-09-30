import React from 'react';

import { Layout, SEO, Hero } from '../components';

function CommercialPaintingPage() {
  return (
    <Layout>
      <SEO title="Commercial Painting" />
      <HeroSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <Hero>
      <div className="text-center">
        <h1 className="heading-1">
          Commercial <br />
          Painting
        </h1>
      </div>
    </Hero>
  );
}

export default CommercialPaintingPage;
