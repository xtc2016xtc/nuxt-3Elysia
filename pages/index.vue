<script setup>
definePageMeta({
  layout: 'custom'
})
import { useCounterStore } from '~/stores/myStore';
const store = useCounterStore();
console.log(store);
// import { useConterStore } from '~/stores/myStore';
//   const store = useConterStore();
//   console.log(store);
</script>

<template>
  <div>hello</div>
</template>