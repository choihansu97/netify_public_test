import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section-gradient":
          "linear-gradient(186.21deg, #6E55DB -5.36%, #2F1893 96.37%)",
        "hero-button-gradient":
          "linear-gradient(101.81deg, #6E55DB 8.19%, #2F1893 83.7%)",
        "section4-gradient-border":
          "linear-gradient(91.35deg, #795BF9 1.73%, #4844F7 100%)",
        "section5-gradient-color":
          "linear-gradient(93.72deg, #6E48DA 10.07%, #555BDC 85.05%)",
        "section5-gradient-text":
          "linear-gradient(93.72deg, #6E48DA 10.07%, #555BDC 85.05%)",
        "section8-gradient-border":
          "linear-gradient(93.72deg, #7D57E9 10.07%, #4B51E5 85.05%)",
        "section12-gradient-border-2":
          "linear-gradient(93.72deg, #6E48DA 10.07%, #555BDC 85.05%)",
        "section13-gradient-border":
          "linear-gradient(158.77deg, #FFFFFF 1.75%, rgba(255, 255, 255, 0.3) 54.13%, #FFFFFF 102.88%)",
      },
      fontFamily: {
        suit: ['"SUIT"', "sans-serif"],
      },
      screens: {
        "max-1440": { max: "1440px" },
      },
      boxShadow: {
        "section3-box-shadow": "0px 0px 20px rgba(255, 255, 255, 0.15)",
        "section4-box-black":
          "4px 0px 10px -1px rgba(0, 0, 0, 0.1), -4px 0px 10px -1px rgba(0, 0, 0, 0.1), 0px -4px 10px -1px rgba(0, 0, 0, 0.1)",
        "section4-box-black-top-left-right":
          "4px 0px 10px 0px #0000001A, -4px 0px 10px 0px #0000001A, 0px -4px 10px 0px #0000001A",
        "section8-bow1-shadow": "0px 0px 10px 0px rgba(121, 91, 249, 0.3)",
      },
      textColor: {
        "section5-gradient-text": "transparent",
      },
      borderImage: {
        "gradient-border":
          "linear-gradient(158.77deg, #FFFFFF 1.75%, rgba(255, 255, 255, 0.3) 54.13%, #FFFFFF 102.88%) 1",
      },
    },
  },
  screens: {},
  plugins: [
    require("tailwind-scrollbar-hide"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-section5-gradient-text": {
          "background-image":
            "linear-gradient(93.72deg, #6E48DA 10.07%, #555BDC 85.05%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
          display: "inline-block",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
