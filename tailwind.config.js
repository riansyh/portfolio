module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "bg-1": "url('/src/img/bg-1.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
