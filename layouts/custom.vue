<template>
  <div class="responsive-layout">
    <header>
      <!-- Header content goes here -->
      <Navs />
    </header>

    <main class="flex-grow">
      <template v-if="showLoading">
        <Loading />
      </template>
      <template v-else>
        <MiansMian class="image-video" />
        <slot />
      </template>
    </main>

    <footer>
      <!-- Footer content goes here -->
      <Footer />
    </footer>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const showLoading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        showLoading.value = false;
      }, 3000);
    });

    return {
      showLoading
    };
  }
}
</script>

<style scoped>
.responsive-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
