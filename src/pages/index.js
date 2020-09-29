import React from 'react';

import { Layout, SEO, Hero } from '../components';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
  );
}

export default IndexPage;
