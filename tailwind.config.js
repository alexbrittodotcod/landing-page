/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			avenir: ["Avenir", "sans-serif"]
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			'theme-color': 'rgba(232, 57, 92, 1)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
