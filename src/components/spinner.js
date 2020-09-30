import React from 'react';
import ReactSVGSpinner from 'react-svg-spinner';

import { useTailwindConfig } from '../hooks/use-tailwind-config';

function Spinner() {
  // Get colours from Tailwind
  const fullConfig = useTailwindConfig();
  return (
    <ReactSVGSpinner
      size="2em"
      color={fullConfig.theme.colors['burnt-orange']}
      thickness={3}
      speed="slow"
    />
  );
}

export { Spinner };
