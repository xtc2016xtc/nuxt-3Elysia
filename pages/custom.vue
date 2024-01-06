<script setup>
// // definePageMeta({
// //   // Page meta
// //   layout: 'custom',
// // })
// definePageMeta({
//   // Page meta
//   layout: 'custom',
//   // Page meta
//   head: {
//     title: 'Custom page',
//     meta: [
//       {
//         hid: 'description',
//         name: 'description',
//         content: 'Custom page description',
//       },
//     ],
//   },
// })
</script>
<template>
<template>
  <div class="lottery">
    <div class="wheel" :style="{ transform: 'rotate(' + rotation + 'deg)' }">
      <div v-for="(item, index) in items" :key="index" class="item" :style="{ transform: 'rotate(' + (360 / items.length) * index + 'deg)' }">
        {{ item }}
      </div>
    </div>
    <button @click="startLottery">Start</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Prize 1', 'Prize 2', 'Prize 3', 'Prize 4', 'Prize 5'],
      rotation: 0,
      spinning: false,
    };
  },
  methods: {
    startLottery() {
      if (this.spinning) return;
      this.spinning = true;
      const randomIndex = Math.floor(Math.random() * this.items.length);
      const degrees = (360 / this.items.length) * randomIndex + 360 * 5; // Rotate 5 full circles
      this.rotateWheel(degrees);
    },
    rotateWheel(degrees) {
      const duration = 5000; // 5 seconds
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= duration) {
          this.rotation = degrees % 360;
          this.spinning = false;
          return;
        }
        const progress = elapsedTime / duration;
        const easeProgress = this.easeOutCubic(progress);
        this.rotation = (degrees * easeProgress) % 360;
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    },
    easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    },
  },
};
</script>

<style>
.lottery {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
}

.wheel {
  position: relative;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  border-radius: 50%;
  overflow: hidden;
}

.item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 50%;
}

button {
  margin-top: 20px;
}
</style>
  <div class="Custom page">Custom pages</div>
</template>