/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['build/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'active-input-border': 'linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%))',
        'input-errors': 'hsl(0, 100%, 66%)',
        'white': 'hsl(0, 0%, 100%)',
        'light-grayish-violet': 'hsl(270, 3%, 87%)',
        'dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'very-dark-violet': 'hsl(278, 68%, 11%)'
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif']
      },
      maxWidth: {
        '283': '283px',
        '375': '375px',
        '5.5': '5.5rem',
        '400': '400px'
      },
      minWidth: {
        '283': '283px',
        '375': '375px',
        '95': '95%',
        '400': '400px'
      },
      maxHeight: {
        '245': '245px'
      },
      minHeight: {
        '245': '245px'
      },
      inset: {
        '70': '16.16rem',
        '18': '4.5rem',
        '42': '10.6rem',
        '34': '8.1rem'
      },
      translate: {
        '70': '16.16rem',
        '6.5': '1.6rem',
        '4.5': '1.16rem',
        '1.5': '0.485rem'
      },
      padding: {
        '2.5': '0.6rem'
      },
      width: {
        '95': '95%',
        '38': '9.3rem'
      }
    },
  },
  plugins: [],
}

