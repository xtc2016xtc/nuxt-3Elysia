<template>
  <div class="responsive-layout">
    <header>
      <!-- Header content goes here -->
      <Navs />
    </header>

    <main class="flex-grow">
      <!--  -->
      <MiansMian class="image-video"/>
      <slot />
    </main>

    <footer>
      <!-- Footer content goes here -->
      <Footer />
    </footer>
  </div>
</template>

<style  scoped>
.responsive-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
 
