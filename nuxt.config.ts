// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  app:{
    head:{
      title:"Nuxt course on youtube",
      meta:[
        {
          name:"description",
          content:"This is a repository for a course about Nuxt3 FOR YOUTUBE"
        }
      ],
    }
  },
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
  ssr:false,
})
