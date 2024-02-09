// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  app:{
    head:{
      title:"Nuxt App",
      meta:[
        {
          name:"description",
          content:"后台管理系统"
        }
      ],
    }
  },
  alias: {
    // '@': resolve(__dirname, '/'),
    assets:"/<rootDir>/assets",
  },
  css: ["~/assets/main.scss","element-plus/dist/index.css"],
  modules: ["@nuxt/content","@pinia/nuxt","@element-plus/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
