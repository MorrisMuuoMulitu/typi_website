export default {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          colors: {
            primary: '#A80060',
            secondary: '#A81860',
            neutral: {
              600: '#606060',
              400: '#C0C0C0'
            }
          },
          fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            heading: ['Montserrat', 'sans-serif']
          }
        }
      },
      plugins: []
    }
