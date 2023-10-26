/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/* .{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkbg: "#1E293B",
        blue: {
          850: "1d4ed8",
        },
      },
    },
  },
  plugins: [],
};
