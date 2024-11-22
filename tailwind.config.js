/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Outfit Variable', sans-serif"],
      },
      colors: {
        task: {
          completed: '#A0ECB1',
          'in-progress': '#F5D565',
          'wont-do': '#F7D4D3',
          todo: '#E3E8EF',
        },
        icon: {
          'in-progress': '#E9A23B',
          completed: '#32D657',
          'wont-do': '#DD524C',
        },
      },
    },
  },
  plugins: [],
}
