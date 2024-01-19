<template>
  <div class="responsive-layout">
    <header>
      <!-- Header content goes here -->
      <Navs v-if="!showLoading" />
    </header>

    <main class="flex-grow">
      <Loading v-if="showLoading" @click="showLoading = false" />
      <MiansMian class="image-video" v-if="!showLoading" />
      <slot v-if="!showLoading" />
    </main>

    <footer>
      <!-- Footer content goes here -->
      <Footer v-if="!showLoading" />
    </footer>
  </div>
</template>

<script setup>
  const showLoading = ref(true);
</script>

<style scoped>
.responsive-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
