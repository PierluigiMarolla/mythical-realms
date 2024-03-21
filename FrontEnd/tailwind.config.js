/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      ancient: '#8b7455',
      scroll: '#e4bf8a',
      red: 'red',
      "red-50" : '#ff00008c',
      white: 'white',
      black: 'black',
      blue: 'blue',
      green: '#4BDB00',
      yellow: 'yellow',
      purple: 'purple',
      orange: 'orange',
      cyan: 'cyan',
      magenta: 'magenta',
      teal: 'teal',
      navy: 'navy',
      silver: 'silver',
      olive: 'olive',
      maroon: 'maroon',
      lime: 'lime',
      fuchsia: 'fuchsia',
      aqua: 'aqua'
    },
  },
  plugins: [],
}