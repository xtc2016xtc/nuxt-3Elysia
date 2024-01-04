<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>{{ occupation }}</p>
    <p>{{ bio }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Your Name",
      occupation: "Your Occupation",
      bio: "A brief description about yourself",
    };
  },
};
</script>

<style scoped>
.card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
