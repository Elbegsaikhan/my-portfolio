/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        hkgroteskSemi: ['hkgrotesk-semibold'],
        hkgroteskRegular: ['hkgrotesk-regular'],
        hkgroteskMedium: ['hkgrotesk-medium'],
        hkgroteskBold: ['hkgrotesk-bold'],
      },
      transitionTimingFunction: {
        'letter-expo': 'cubic-bezier(.075,.82,.165,1)',
      },
      backgroundImage: {
        noise: "url('/noise-transparent.png')",
      },
    },
  },
  plugins: [],
};
