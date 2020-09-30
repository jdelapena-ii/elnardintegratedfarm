import React from 'react';

import { Layout, SEO, Hero } from '../components';

function ConcreteEpoxyPage() {
  return (
    <Layout>
      <SEO title="Concrete Epoxy Flooring" />
      <HeroSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <Hero>
      <div className="text-center">
        <h1 className="heading-1">
          Concrete <br />
          Epoxy Flooring
        </h1>
      </div>
    </Hero>
  );
}

export default ConcreteEpoxyPage;
