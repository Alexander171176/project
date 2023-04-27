/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor: '#f2f2ff'
      },
      backgroundImage: (theme) => ({
        'image-one':
          "url('../public/img/page-background-white.jpg')",
        'image-two':
          "url('../public/img/page-background-black.jpg')",
      }),
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1028px',
        xl: '1440px'
      }
    },
  },
    variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}

