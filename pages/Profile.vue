<template>
  <div>hello profile</div>
</template>

<script setup>
/**
 * @type {import('@nuxtjs/composition-api').Context}
 */
 const { $sayHello } = useNuxtApp()
  $sayHello("Guilaume")
</script>