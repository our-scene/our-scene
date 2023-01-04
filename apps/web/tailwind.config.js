module.exports = {
  daisyui: {
    themes: [
      {
        our_scene_default: {
          primary: '#1d2f6f',
          'primary-focus': '#14213D',
          'primary-content': '#FFF',
          secondary: '#fce57b',
          neutral: '#efe8e4',
          info: '#A4C0FA',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  content: ['./pages/**/*.{html,js,jsx,ts,tsx}', './components/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
