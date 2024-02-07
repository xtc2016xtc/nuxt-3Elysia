<template>
  <div class="flex items-center justify-center h-screen bg-black">
    <video
      ref="video"
      class="absolute inset-0 object-cover w-full h-full"
      autoplay
      muted
      loop
    >
      <source src="https://www.yuanshen.com/medias/bg.3e78e808.mp4"  preload="auto" poster="https://www.yuanshen.com/images/poster.948ee40e.jpg" muted="muted" loop="loop" autoplay="autoplay" type="video/mp4" />
    </video>

    <div class="absolute inset-0 flex items-center justify-center">
      <button
        class="px-8 py-4 text-white bg-transparent border border-white rounded-lg hover:bg-white hover:text-black"
        @click="startLoading"
      >
        {{ isLoading ? '加载中...' : '进入首页' }}
        
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(false);

function startLoading() {
  isLoading.value = true;
}
</script>
