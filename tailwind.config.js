export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Montserrat', 'system-ui', 'sans-serif'],
          heading: ['Raleway', 'system-ui', 'sans-serif'],
          display: ['Poppins', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [
      require("@tailwindcss/line-clamp"),
    ],
  };