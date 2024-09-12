/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        screens: {
          sm: "320px", // Custom small screen breakpoint
          md: "768px", // Custom medium screen breakpoint
          lg: "1024px", // Custom large screen breakpoint
          xl: "1280px", // Custom extra-large screen breakpoint
          xl2: "1440px", // Custom 2x-large screen breakpoint
        },
      },
    },
  },
  plugins: [],
};
