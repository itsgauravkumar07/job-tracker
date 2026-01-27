/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         /* Brand */
        primary: "#6366f1",        // blue-600
        "primary-hover": "#1d4ed8", // blue-700

        /* Base UI */
        background: "#0b0b0f",     // gray-50
        surface: "#12121a",        // white
        border: "#1f1f2a",          // gray-200
        text: "#f5f5f7",            // gray-900
        muted: "#9ca3af",           // gray-500

        /* Status */
        success: "#16a34a",         // green-600
        warning: "#ca8a04",         // yellow-600
        danger: "#dc2626",          // red-600
        info: "#0284c7",            // sky-600

      },
    },
  },
  plugins: [],
};
