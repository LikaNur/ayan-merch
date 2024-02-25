module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Roboto",
      secondary: "Montserrat",
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1455px",
    },
    extend: {
      colors: {
        primary: "#02AF66",
        secondary: "#F5E6E0",
        normal: "#000000",
        default: "#F3F5F6",
        main: "#ECF0F3",
        footer: "#222222",
      },
    },
  },
  plugins: [],
};
