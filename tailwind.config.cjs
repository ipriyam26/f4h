module.exports = {
  darkmode: true,
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",

  ],
  theme: {

    extend: {
      colors: {
        "secondary": "#FFF8E5",
        "primary": "#BA68C8",
        "slate": "#D7D7D7"
        , "white": "#FFFFFF",
        "black": "#101010"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkmode: 'class'
}
