module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "portfolio-primary": "#6c00ff",
      "portfolio-secondary": "#EC00FF",
      "portfolio-headers":"#242D49",
      white:"#fff"
    },
    fontFamily: {
      body: ["Tajawal"],
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  plugins: [],
};
