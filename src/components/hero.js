import { Link } from 'gatsby';
import React from 'react';

function Hero() {
  return (
    <header className="relative">
      <div className="flex flex-col items-center justify-center px-4 py-24 mx-auto sm:px-6 lg:px-8">
        <div className="w-full space-y-4 text-center">
          <h1 className="text-3xl italic uppercase sm:text-4xl">
            Get in touch for <br />
            <span className="font-extrabold">a free quote</span>
          </h1>
          <Link to="/contact/" className="button">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export { Hero };
