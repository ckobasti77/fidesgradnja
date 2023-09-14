/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "third": "var(--third)",
        "fourth": "var(--fourth)",
        "fifth": "var(--fifth)",
        "sixth": "var(--sixth)",
      },
      screens: {
        'xs': '350px',
        'sm': '576px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1500px',
        '3xl': '1920px',
      },
      fontFamily: {
        'raleway': "'Raleway', sans-serif"
      }
    },
  },
  plugins: [require('daisyui')]
}
