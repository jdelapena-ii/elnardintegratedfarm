import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Spinner } from '../components/spinner';

function useLazyLoad() {
  function LoadingSpinner() {
    return (
      <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gray-50">
        <Spinner />
      </div>
    );
  }
  // Add a ref to image wrapper so that we can detect when it enters the viewport using IntersectionObserver
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // Create a ref for the product image
  const srcRef = useRef(null);

  // Show a spinner while image is loading
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to set imageLoaded to true so that we can unmount the spinner
  function handleIsLoaded() {
    setIsLoaded(true);
  }

  // When image enters the screen swap out src for the data-src
  useEffect(() => {
    if (inView) {
      srcRef.current.src = srcRef.current.dataset.src;
    }
  }, [inView]);

  return {
    ref,
    srcRef,
    isLoaded,
    setIsLoaded,
    handleIsLoaded,
    Spinner: LoadingSpinner,
  };
}

export { useLazyLoad };
