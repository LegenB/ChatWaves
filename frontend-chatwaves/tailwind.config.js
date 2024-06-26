/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cyber-blue': '#22ebf2',
        'cyber-pink':'#e753f5'
      },
      backgroundImage: {
        'cyberpunk' : 'url("https://i.ibb.co/CMZ8zt5/Fondo-Min.png")'
      }
    },
    fontFamily: {
      'jacquard': ['"Jacquard 12"', 'system-ui'],
      'Saiba' : ['Saiba', 'Regular'],
      'Saiba-Outline' : ['Saiba-Outline', 'Regular'],
      'Neuron': ['Neuron', 'Regular'],
      'Neuron-Italic': ['Neuron-Italic', 'Regular']
    },

  },
  plugins: [],
}

