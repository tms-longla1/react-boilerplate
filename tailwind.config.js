/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3BB6BA',
        banner: '#07162E',
        inputText: '#42526D',
        inputBorder: '#E4E1FD',
        inputBg: '#F6F5FE'
      }
    }
  },
  plugins: []
}
