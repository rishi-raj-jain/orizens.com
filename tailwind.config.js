/* eslint-disable import/no-extraneous-dependencies, global-require */
const plugin = require('tailwindcss/plugin');

const primary = '#24d5bb';
const primaryImportant = `${primary} !important`;

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary,
        primaryAlpha: '#24d5bb1c',
        accent: '#ffdd57',
        accentLight: '#f9fb6e',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    plugin(({ addBase, theme }) => {
      addBase({
        h1: {
          fontSize: theme('fontSize.6xl'),
          color: primaryImportant,
        },
        h2: {
          color: primaryImportant,
        },
        h3: {
          fontSize: theme('fontSize.2xl'),
          color: primaryImportant,
        },
        strong: {
          color: primaryImportant,
        },
        a: {
          color: primaryImportant,
        },
        code: {
          backgroundColor: theme('colors.violet[800]'),
          padding: theme('spacing[1.5]'),
          borderRadius: theme('borderRadius.lg'),
        },
        'code::before': {
          display: 'none',
        },
        'code::after': {
          display: 'none',
        },
      });
    }),
  ],
};
