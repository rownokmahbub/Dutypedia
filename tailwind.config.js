module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "4rem",
      },
    },
    fontFamily: {
      body: ["aller", "sans-serif"],
      pop: ["Poppins", "sans-serif"],
      infinite: ["Infinite", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "0vw 0vw 0.5vw 0vw rgb(32 32 32 / 12%)",
        "4xl": " 0vw 0vw 0.5vw 0vw rgb(32 32 32 / 20%)",
        "5xl": " 0vw 0.5vw 0.5vw 0vw rgb(32 32 32 / 16%)",
        "glass":"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        "glass-card":"0 16px 12px 0 rgba( 31, 32, 32, 0.37 )",
        "card-shadow": "0px 0px 12px #CCCCCC",
      },
    
      colors: {
        primary: {
          DEFAULT: "#DA1E37",
          50: "#F7C6C6",
          100: "#F5B4B4",
          200: "#F09090",
          300: "#EC6C6C",
          400: "#E74848",
          500: "#DA1E37",
          600: "#B61818",
          700: "#841212",
          800: "#530B0B",
          900: "#210404",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#DA1E37",
          "primary-focus": "#E74848",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
