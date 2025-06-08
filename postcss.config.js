// tailwind.config.js

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                float: "float 6s ease-in-out infinite",
                "float-slow": "float 10s ease-in-out infinite",
                "fade-in": "fadeIn 1s ease-in-out",
                "gradient-x": "gradientX 5s ease infinite",
                "text-glow": "glow 3s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                fadeIn: {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                gradientX: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                glow: {
                    "0%, 100%": {
                        textShadow: "0 0 10px #00f2ff, 0 0 20px #3a47d5",
                    },
                    "50%": {
                        textShadow: "0 0 20px #3a47d5, 0 0 40px #00f2ff",
                    },
                },
            },
        },
    },
    plugins: [tailwindcss, autoprefixer],
};