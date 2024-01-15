<script setup>
const { data:productCount,pending } = await useAsyncData('count',() => $fetch('/api/count'));
const refresh = () => refreshNuxtData('count'); 
</script>

<template>
  <div>
    <p>Page Count: {{ pending ? "loading" : productCount }}</p>
    <button @click="refresh">Refresh</button>
  </div>
</template>
