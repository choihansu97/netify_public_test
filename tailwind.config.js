const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section-gradient': 'linear-gradient(186.21deg, #6E55DB -5.36%, #2F1893 96.37%)',
        'hero-button-gradient': 'linear-gradient(101.81deg, #6E55DB 8.19%, #2F1893 83.7%)',
        'section4-gradient-border': 'linear-gradient(91.35deg, #795BF9 1.73%, #4844F7 100%)',
        'section5-gradient-color': 'linear-gradient(93.72deg, #6E48DA 10.07%, #555BDC 85.05%)',
        'section5-gradient-text': 'linear-gradient(93.72deg, #6E48DA 10.07%, #555BDC 85.05%)',
        'section8-gradient-border': 'linear-gradient(93.72deg, #7D57E9 10.07%, #4B51E5 85.05%)',
        'section12-gradient-border-2': 'linear-gradient(93.72deg, #6E48DA 10.07%, #555BDC 85.05%)',
        'section13-gradient-border': 'linear-gradient(158.77deg, #FFFFFF 1.75%, rgba(255, 255, 255, 0.3) 54.13%, #FFFFFF 102.88%)'
      },
      fontFamily: {
        suit: ['"SUIT"', 'sans-serif']
      },
      screens: {
        'max-1440': { max: '1440px' }
      },
      boxShadow: {
        'section3-box-shadow': '0px 0px 20px rgba(255, 255, 255, 0.15)',
        'section4-box-black': '4px 0px 10px -1px rgba(0, 0, 0, 0.1), -4px 0px 10px -1px rgba(0, 0, 0, 0.1), 0px -4px 10px -1px rgba(0, 0, 0, 0.1)',
        'section4-box-black-top-left-right': '4px 0px 10px 0px #0000001A, -4px 0px 10px 0px #0000001A, 0px -4px 10px 0px #0000001A',
        'section8-bow1-shadow': '0px 0px 10px 0px rgba(121, 91, 249, 0.3)',
        'blur': '0 0 10px 4px rgba(255, 255, 255, 0.5)'
      },
      backgroundColor: {
        'purple-custom': '#795BF9',
        'pagination-bullet': 'rgba(255, 255, 255, 0.2)',
        'pagination-bullet-active': 'rgba(255, 255, 255, 1)'
      },
      textColor: {
        'purple-custom': '#795BF9',
        'section5-gradient-text': 'transparent'
      },
      opacity: {
        'pagination-bullet': '1'
      },
      borderImage: {
        'gradient-border': 'linear-gradient(158.77deg, #FFFFFF 1.75%, rgba(255, 255, 255, 0.3) 54.13%, #FFFFFF 102.88%) 1'
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out'
          },
          '50%': {
            transform: 'translateY(-15px)',
            animationTimingFunction: 'ease-in'
          }
        },
        blink: {
          '0%': { filter: 'blur(0px)', opacity: '1' },
          '100%': { filter: 'blur(4px)', opacity: '0.2' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        logoSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        bounce: 'bounce 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
        blink: 'blink 1s infinite alternate',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
        logoSpin: 'logoSpin infinite 20s linear',
        gradientMove: 'gradientMove 2s linear infinite'
      }
    }
  },
  screens: {},
  plugins: [
    require('tailwind-scrollbar-hide'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.truncate-multiline': {
          display: '-webkit-box',
          '-webkit-line-clamp': '7',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
          'text-overflow': 'ellipsis'
        },
        '.text-section5-gradient-text': {
          'background-image': 'linear-gradient(93.72deg, #6E48DA 10.07%, #555BDC 85.05%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
          display: 'inline-block'
        },
        '.shadow-blur::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          background: 'inherit',
          borderRadius: 'inherit',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(4px)',
          opacity: '0.5',
          animation: 'blink 1s infinite alternate',
          zIndex: '-1'
        },
        '.logo': {
          height: '6em',
          padding: '1.5em',
          'will-change': 'filter',
          transition: 'filter 300ms'
        },
        '.logo:hover': {
          filter: 'drop-shadow(0 0 2em #646cffaa)'
        },
        '.logo.react:hover': {
          filter: 'drop-shadow(0 0 2em #61dafbaa)'
        },
        '.card': {
          padding: '2em'
        },
        '.read-the-docs': {
          color: '#888'
        },
        '.section3-box': {
          position: 'relative',
          'z-index': '1'
        },
        '.section3-box::before': {
          content: '""',
          position: 'absolute',
          inset: '0',
          'border-radius': '20px',
          padding: '1px',
          background: 'linear-gradient(123.48deg, #ffffff -4.06%, rgba(255, 255, 255, 0.3) 42.05%, #ffffff 111.8%)',
          '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          '-webkit-mask-composite': 'xor',
          'mask-composite': 'exclude',
          'z-index': '-1',
          animation: 'gradientMove 2s linear infinite',
          'background-size': '200% 200%'
        },
        '.section4-box-gradient-border': {
          'border-image-source': 'linear-gradient(91.35deg, #795bf9 1.73%, #4844f7 100%)',
          'border-image-slice': '1',
          'border-radius': '4px',
          border: '1px solid'
        }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    })
  ]
};