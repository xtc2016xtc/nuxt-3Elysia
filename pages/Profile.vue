<template>
  <div>hello profile</div>
</template>

<script setup>
 const { $sayHello } = useNuxtApp()
  $sayHello("Guilaume")
</script>