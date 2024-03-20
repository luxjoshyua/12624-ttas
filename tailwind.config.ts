export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tiny: '279px',
        mb: '428px',
        tb: '768px',
        sm: '1024px',
        sd: '1280px',
        md: '1366px',
        lg: '1440px',
        xl: '1920px',
        xxl: '2000px',
      },
      colors: {
        'bright-cyan': '#58F6F4',
        'dark-blue': '#192958',
        purple: '#A7AAF0',
        mustard: '#978332',
        cream: '#EFECD9',
      },
      fontSize: {
        clampHeading: 'clamp(48px, 6vw, 92px)',
        clampHeading2: 'clamp(30px, 5vw, 54px)',
        '19': ['19px', '36px'],
        '78': ['78px', '100px'],
        '100': ['100px', '135px'],
      },
      lineHeight: {
        tight: '1.00',
        normal: '1.35',
        custom: '1.5',
      },
      backgroundImage: {
        heroSquiggles: "url('/src/assets/images/desktop/hero-squiggles.png')",
      },
    },
  },
  plugins: [],
}
