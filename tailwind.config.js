const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUI = require('@tailwindcss/ui');

// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: 'all',
  theme: {
    extend: {
      colors: {
        navy: '#062448',
        'burnt-orange': '#d14727',
        'sky-blue': '#e9f0f6',
        'light-gray': '#f1f1f1',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // Default values here: https://tailwindcss.com/docs/pseudo-class-variants#default-variants-reference
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'group-focus'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-focus'],
  },
  plugins: [
    // See https://tailwindui.com/documentation for details
    tailwindUI,
  ],
};
