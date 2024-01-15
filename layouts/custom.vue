<template>
  <div class="responsive-layout">
    <header>
      <!-- Header content goes here -->
      <Navs />
    </header>

    <main class="flex-grow">
      <!-- Main content goes here -->
      <slot />
    </main>

    <footer>
      <!-- Footer content goes here -->
      <Footer />
    </footer>
  </div>
</template>
