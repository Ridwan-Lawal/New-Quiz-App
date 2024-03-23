/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        reds: "#EE5454",
        white: "#fff",
        pink: "#A729F5",
        almostDark: "#313E51",
        darkGray: "#3B4D66",
        grays: "#626C7F",
        lightGray: "#ABC1E1",
        almostWhite: "#F4F6FA",
        greens: "#26D782",
      },

      backgroundImage: {
        mobileLightBackground:
          "url('/src/assets/pattern-background-mobile-light.svg')",
        mobileDarkBackground:
          "url('/src/assets/pattern-background-mobile-dark.svg')",
        desktopLightBackground:
          "url('/src/assets/pattern-background-desktop-light.svg')",
        desktopDarkBackground:
          "url('/src/assets/pattern-background-desktop-dark.svg')",
        tabletLightBackground:
          "url('/src/assets/pattern-background-tablet-light.svg')",
        tabletDarkBackground:
          "url('/src/assets/pattern-background-tablet-dark.svg')",
      },
    },
  },
  plugins: [],
};
