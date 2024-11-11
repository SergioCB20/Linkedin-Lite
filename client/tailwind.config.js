/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         //color del logo del linkedin
        primary: "#2563eb",
        //color primary en estado hover
        primaryHover:"#1d4ed8 ",
        // color del logo del linkedin un tono más abajo
        secondary:"#3b82f6",
        // color de fondo
        base: "#090979",
        // color de un bg-item
        item:"#ffffff",
        // color de un bg-item cuando le hacen hover
        itemHover:"#f9f9f9",
      },
      backgroundImage: {
        base: 'linear-gradient(180deg, rgba(12,11,62,1) 33%, rgba(19,18,86,1) 48%, rgba(11,15,114,1) 57%, rgba(16,26,110,1) 72%, rgba(10,40,149,1) 84%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}