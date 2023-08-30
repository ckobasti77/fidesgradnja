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
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        'raleway': "'Raleway', sans-serif"
      }
    },
  },
  plugins: [require('flowbite/plugin'), require("daisyui")]
}
