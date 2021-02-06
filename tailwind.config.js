const defaultTheme = require('tailwindcss/defaultTheme');
const aspectRatio = require('tailwindcss-aspect-ratio');
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
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
      '3/4': [3, 4],
    },
    typography: (theme) => ({
      default: {
        css: {
          'ol > li::before': {
            color: theme("colors.['burnt-orange']"),
          },
          'ul > li::before': {
            backgroundColor: theme("colors.['burnt-orange']"),
          },
        },
      },
    }),
    extend: {
      colors: {
        navy: '#062448',
        'burnt-orange': '#d14727',
        'sky-blue': '#e9f0f6',
        'light-gray': '#f1f1f1',
        'forest-green': '#228B22',
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
    // See https://github.com/webdna/tailwindcss-aspect-ratio for details
    aspectRatio,
    // See https://tailwindui.com/documentation for details
    tailwindUI,
  ],
};
