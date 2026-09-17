import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#123f3c',
          light: '#1f5b56',
          dark: '#0b2d2b',
        },
        accent: {
          DEFAULT: '#7fa33c',
          light: '#91b64d',
          dark: '#607d2b',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Inter', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
