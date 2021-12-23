module.exports = {
  purge: ["./public/index.html", "./src/**/*.{js, jsx}"],
  enabled: process.env.NODE_ENV === "production",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FBFBFB",
          200: "#EAEAEA",
          300: "#DFDFDF",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#191919",
        },
        primary: {
          500: "#fbd38d",
          600: "#ff9944",
          700: "#ff9933",
          800: "#663399",
          900: "#BA3F1D",
        },
        dark: {
          600:"#818181",
          700:"#212124",
          800:"#161618",
          900: "#02020B"
        }
      },
      gridTemplateColumns: {
        // Simple max-content
        "max-2": "repeat(2, max-content)",
        "max-3": "repeat(3, max-content)",
        "max-4": "repeat(4, max-content)",
        "mx-mi": " min-content 1fr",
        "fr-mx": "1fr max-content",
        "max-fr": " max-content 1fr",
        "min-2": "repeat(2, min-content)",
        auto: "repeat( auto-fit, minmax(10vw, max-content) )",
      },

      boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.16)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.16)",
        default:
          "0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
        none: "none",
        new: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        white: " rgba(0, 0, 0, 0.1) 0px 4px 12px",
        "new-1":
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        "new-2":
          "rgba(50, 150, 250, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        "new-3":
          " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        "new-4":
          "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;",
      },
      spacing: {
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      width: {
        "1/5": "550px",
        68: "300px",
        72: "500px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.625rem",
        "5xl": "3.25rem",
        "6xl": "5.5rem",
      },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      lineHeight: {
        none: "1",
        tighter: "1.125",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.2rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      minWidth: {
        10: "2.5rem",
        48: "12rem",
      },
      padding: {
        34: "9rem",
      },
      maxWidth: {
        550: "550px",
      },
      opacity: {
        90: "0.9",
      },
      scale: {
        98: ".98",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-5%)",
          },
        },
      },
      // customForms: (theme) => ({
      //   default: {
      //     'input, textarea, multiselect, select, checkbox, radio': {
      //       backgroundColor: theme('colors.white'),
      //       borderColor: theme('colors.gray.300'),
      //       borderRadius: theme('borderRadius.default'),
      //       '&:focus': {
      //         outline: undefined,
      //         boxShadow: undefined,
      //         borderColor: theme('colors.gray.500'),
      //       },
      //     },
      //     'input, textarea, multiselect, select': {
      //       backgroundColor: theme('colors.white'),
      //       fontSize: undefined,
      //       lineHeight: undefined,
      //       paddingTop: theme('spacing.3'),
      //       paddingRight: theme('spacing.4'),
      //       paddingBottom: theme('spacing.3'),
      //       paddingLeft: theme('spacing.4'),
      //     },
      //     'input, textarea': {
      //       '&::placeholder': {
      //         color: theme('colors.gray.500'),
      //       },
      //     },
      //     select: {
      //       paddingRight: theme('spacing.10'),
      //       iconColor: theme('colors.gray.400'),
      //     },
      //     'checkbox, radio': {
      //       color: theme('colors.gray.800'),
      //       backgroundColor: theme('colors.white'),
      //       borderRadius: theme('borderRadius.sm'),
      //     },
      //   },
      // }),
    },
  },
  variants: {
    backgroundColor: ["dark","responsive", "hover", "focus", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover", "dark"],
    translate: ["responsive", "hover", "focus", "group-hover"],
    boxShadow: ["responsive", "hover", "focus", "focus-within"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
    border: ["responsive", "hover", "focus", "group-hover"],
  },

  // eslint-disable-next-line global-require
  plugins: [],
};
