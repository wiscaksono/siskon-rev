module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        sejarah: "url('/sejarah-bg.png')",
        rektor: "url('/rektor-bg.png')",
        team: "url('/team-bg.png')",
        footer: "url('/footer-bg.png')",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [],
};
