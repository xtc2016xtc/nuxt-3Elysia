<script setup>
definePageMeta({
  layout: 'custom'
})
import { useCounterStore } from '~/stores/myStore';
const store = useCounterStore();
console.log(store);
const response = await $fetch('/api/hello')
console.log(response)
// import { useConterStore } from '~/stores/myStore';
//   const store = useConterStore();
//   console.log(store);
</script>

<template>
  <div><ContentDoc/></div>
</template>