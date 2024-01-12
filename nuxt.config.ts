// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  alias: {
    // '@': resolve(__dirname, '/'),
    assets:"/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  modules: ["@nuxt/content","@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
})
