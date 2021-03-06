const { fontFamily, spacing } = require("tailwindcss/defaultTheme");

module.exports = {
  prefix: "",
  important: true,
  separator: ":",
  theme: {
    fontFamily: {
      sans: ["Poppins", ...fontFamily.sans],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      inset: {
        "1": "1rem",
        "2": "1.5rem",
        "1/2": "50%",
      },
      translate: {
        "1/2": "50%",
      },
      spacing: {
        "2-rev": `-${spacing["2"]}`,
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      flexGrow: {
        "11": 11,
      },
      zIndex: {
        "-1": -1,
      },
    },
  },
};
