<script setup>
definePageMeta({
  layout: 'custom'
})
const { data: products,pending } = await useLazyFetch('/api/products')
</script>

<template>
  <div>
    <p v-for="(item,index) in pending ? products : products" :key="index">{{ item.name }}</p>
    <!-- <p>{{ pending ? "加载中": products }}</p> -->
  </div>
</template>
