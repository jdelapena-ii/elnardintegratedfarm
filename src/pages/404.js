import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO, Hero } from '../components';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <HeroSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <Hero>
      <div className="w-full space-y-4 text-center">
        <h1 className="heading-1">404: Page Not Found</h1>
        <p className="text-2xl italic uppercase sm:text-3xl">
          The page you were looking for <br />
          could not be found
        </p>
        <Link to="/" className="button">
          Return Home
        </Link>
      </div>
    </Hero>
  );
}

export default NotFoundPage;
