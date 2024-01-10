<script setup>
  const counter = useCounter();
</script>

<template>
  <div>
      <h1>Counter: {{ counter }}</h1>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    </div>
</template>