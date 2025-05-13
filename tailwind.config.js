module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      s: "375px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
    extend: {
      // Custom breakpoints (opsional)
      screens: {
        tall: { raw: "(min-height: 800px)" },
        mobile: { max: "639px" },
      },
      fontFamily: {
        customFont: ["zz", "lato"],
      },
    },
  },
  plugins: [],
};
