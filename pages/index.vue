<script setup>
definePageMeta({
  layout: 'custom'
})
const { data: products,pending } = await useLazyFetch('/api/products')
</script>

<template>
  <div>
    <!-- <p>{{ products }}</p> -->
    <p>{{ pending ? "加载中": products }}</p>
  </div>
</template>