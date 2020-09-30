import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../../tailwind.config.js';

function useTailwindConfig() {
  return resolveConfig(tailwindConfig);
}

export { useTailwindConfig };
