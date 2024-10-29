/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  theme: {
    extend: {
      colors: {
        my: {
          red: '#962237',
          blue: '#212d3a',
          cardShadow:
            'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;',
        },
        overflow: {
          default: 'rgba(0, 56, 76, 0.45)',
        },
      },
      maxWidth: {
        container: '1620px',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('data-active', '&[data-active="true"]');
      addVariant('data-selected', '&[data-selected="true"]');
    }),
  ],
};
