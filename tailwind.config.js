/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // Enables automatic dark mode based on user's system preferences
  theme: {
    extend: {
      colors: {
        // Custom colors for light mode
        lightBackground: '#f8fafc', // Example: light gray background for light mode
        lightText: '#1f2937', // Example: dark gray text for light mode

        // Custom colors for dark mode
        darkBackground: '#111827', // Example: dark gray/black background for dark mode
        darkText: '#f9fafb', // Example: light gray/white text for dark mode
      },
     
      // You can extend other parts of the theme like spacing, fonts, etc. here
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'], // Example of adding custom fonts
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable background color change in dark mode
      textColor: ['dark'], // Enable text color change in dark mode
      borderColor: ['dark'], // Optional: change border colors in dark mode
      ringColor: ['dark'], // Optional: change focus ring colors in dark mode
    },
  },
  plugins: [
  ],
}
