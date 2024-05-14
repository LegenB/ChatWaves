/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'jacquard': ['"Jacquard 12"', 'system-ui'],
      'Saiba' : ['Saiba', 'Regular'],
      'Saiba-Outline' : ['Saiba-Outline', 'Regular']
    },

  },
  plugins: [],
}

