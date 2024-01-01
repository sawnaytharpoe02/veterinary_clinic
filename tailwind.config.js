/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#54BAB9",
        mainBG: "#ffffdd",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
