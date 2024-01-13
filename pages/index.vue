<script setup>
definePageMeta({
  layout: 'custom'
})
const { data: products,pending } = await useLazyFetch('/api/products')
</script>

<template>
  <div v-for="(item,index) in pending ? products : products" :key="index">
    <p>{{ item.name }}</p>
    <p>{{ item.image }}</p>
    <!-- <p>{{ pending ? "加载中": products }}</p> -->
  </div>
</template>
