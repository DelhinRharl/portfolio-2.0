module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito', 'sans-serif'],
      },
      backgroundImage: () => ({
        bgImage: "url('../assets/images/background.jpg')",
      }),
    },
  },
  plugins: [],
};
