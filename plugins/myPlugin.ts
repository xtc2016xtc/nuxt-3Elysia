/**
 * A Nuxt plugin that provides a function to say hello.
 * @param nuxtApp - The Nuxt application instance.
 * @returns An object with a `provide` property that contains a function to say hello.
 */
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      sayHello:(msg:string) => console.log(`hello ${msg}`)
    }
  }
})