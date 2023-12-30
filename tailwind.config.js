/** @type {import('tailwindcss').Config} */
export default {  
  plugins: [require("daisyui")],  
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: "class",
  theme: {
   
  },
  daisyui: {
      themes: [
        'coffee',
        'autumn'
      ],
    },
}

