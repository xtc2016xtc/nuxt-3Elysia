<template>
  <div class="bg-video-container">
    <video class="bg-video" autoplay muted loop>
      <source src="/hellowr.mp4" type="video/mp4">
    </video>
    <div class="content">
      <!-- Your content here -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mian',
}
</script>

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
