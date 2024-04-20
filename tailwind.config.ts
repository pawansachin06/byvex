import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        '16/9': '56.25%',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
export default config;
