import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/drinkslime/" : "/",
  build: {
    outDir: "docs",
    rollupOptions: {
      output: {
        manualChunks: {
          "gsap-core": ["gsap"],
          "gsap-plugins": ["gsap/ScrollTrigger", "gsap/SplitText"],
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
