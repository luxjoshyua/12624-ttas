export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			screens: {
				mb: '428px',
                tb: '768px',
                sm: '1024px',
				sd: '1280px',
                md: '1366px',
                lg: '1440px',
                xl: '1920px',
				xxl: '2000px'
			},
			colors: {
				'bright-cyan': '#58F6F4',
				'dark-blue': '#192958',
			},
			fontSize: {
				clampHeading: "clamp(48px, 6vw, 92px)",
				'19': ['19px', '36px'],
				'78': ['78px', '100px'],
				'100': ['100px', '135px']
			  },
			  lineHeight: {
				tight: '1.00',
				normal: '1.35',
				custom: '1.5',
			},
		}
	},
  plugins: [],
};
