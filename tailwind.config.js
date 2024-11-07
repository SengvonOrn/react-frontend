const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundColor: {
        green: "#4CAF4F",
        "bg-w1": "#F5F7FA",
        "bg-w2": "#F5F7FA",
      },
      textColor: {
        plue: "#0671E0",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
