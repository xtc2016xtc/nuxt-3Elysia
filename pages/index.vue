<template>
  <div class="Main">
    <h1>Main Pages</h1>
    <!-- <img src="/10001.jpg" alt=""> -->
    <IconsBell />
  </div>
</template>
<script setup>
  const { $sayHello } = useNuxtApp()
  $sayHello("Guilaume")
</script>
