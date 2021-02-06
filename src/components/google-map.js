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
        data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.8185627269477!2d123.52476791403954!3d9.170833893422543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab3fd52a9dbee3%3A0x5dda84a8436fe2b8!2sElnard%20Integrated%20Farm!5e0!3m2!1sen!2sph!4v1609330900393!5m2!1sen!2sph"
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
