/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        title: 'calc(7vmin + 8px)',
        'main-title': 'calc(11vmin + 8px)',
        'sub-title': 'calc(2vmin + 10px)',
      },
      colors: {
        dark: '#333',
      },
    },
  },
  plugins: [],
};
