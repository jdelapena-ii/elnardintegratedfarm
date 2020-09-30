import React from 'react';

import { Layout, SEO, Hero, ContactSection } from '../components';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ContactSection />
    </Layout>
  );
}

export default IndexPage;
