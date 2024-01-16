<template>
  <div class="bg-video-container">
    <video class="bg-video" autoplay muted loop>
      <source src="/hellowr.mp4" type="video/mp4">
    </video>
    <div class="content">
      <!-- Your content here -->
      <main class="container mx-auto px-4 py-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Welcome to TailwindCSS</h1>
          <p class="text-lg text-gray-700 mb-8">A utility-first CSS framework for rapidly building custom designs.</p>
        </main>
    </div>
  </div>
</template>

<style scoped>
.bg-video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
