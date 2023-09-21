import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "tailwindcss";

export default defineConfig({
  base: "/e-commerce/",
  plugins: [],
  resolve: {
    /* algo aqui */
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        checkout: resolve(__dirname, "./checkout.html"),
        pedidos: resolve(__dirname, "./pedidos.html"),
      },
    },
  },
});