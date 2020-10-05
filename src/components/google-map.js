import React from 'react';

import { useLazyLoad } from '../hooks';

function GoogleMap() {
  const { ref, srcRef, isLoaded, handleIsLoaded, Spinner } = useLazyLoad();
  return (
    <article
      ref={ref}
      className="relative h-0 aspect-ratio-16/9 lg:aspect-ratio-none lg:h-96"
    >
      <iframe
        ref={srcRef}
        onLoad={handleIsLoaded}
        data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6808.063199201677!2d152.9114566346591!3d-31.440796995348922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9dff323e0bd52f%3A0xd60142643e797c7f!2s94%20Grant%20St%2C%20Port%20Macquarie%20NSW%202444%2C%20Australia!5e0!3m2!1sen!2sph!4v1601854721619!5m2!1sen!2sph"
        tabIndex={0}
        frameBorder={0}
        aria-hidden={false}
        allowFullScreen
        title="Location"
        className="absolute inset-0 w-full h-full"
      />
      {!isLoaded && <Spinner />}
    </article>
  );
}

export { GoogleMap };
