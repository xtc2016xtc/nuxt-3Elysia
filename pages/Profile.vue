<template>
  <div>hello profile</div>
</template>

<script setup>
/**
 * @type {import('@nuxtjs/composition-api').Context}
 */
 const { $sayHello } = useNuxtApp()
  $sayHello("Guilaume")
  definePageMeta({
  title: 'Home',
  description: 'The home page of our site.',
  layout:"custom"
})
</script>