<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-900">
    <div class="text-white text-4xl">Loading...</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    // 加载完成后的逻辑
  }, 3000)
})
</script>

<style>
/* 可以在这里添加自定义的样式 */
</style>
