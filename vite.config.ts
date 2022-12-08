import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
// @ts-nocheck
import { svgstore } from "./src/vite_plugins/svgstore";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueJsx({
      transformOn: true,
      mergeProps: true,
    }),
    svgstore(),
  ],
});
