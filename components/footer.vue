<script setup>
  const { data:footer,pending } = await useLazyFetch('/api/footer')
</script>
<template>
  <!-- Footer component -->
  <footer class="bg-gray-800 py-4">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex items-center">
          <img src="/10005.png" alt="Logo" class="h-8 w-8 mr-2">
          <span class="text-white text-lg font-semibold">My Website</span>
        </div>
        
        <div class="flex items-center mt-4 md:mt-0" v-for="(item,index) in pending ? footer : footer" :key="index">
          <a href="#" class="text-gray-400 hover:text-white mr-4">{{ item.title }}</a>
        </div>
      </div>
    </div>
  </footer>
  <!-- End of Footer component -->
</template>