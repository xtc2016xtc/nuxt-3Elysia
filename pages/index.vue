<script setup>
definePageMeta({
  layout: 'custom'
})
import { useConterStore } from '~/stores/myStore';
  const store = useConterStore();
  console.log(store);
</script>

<template>
  <div>hello</div>
</template>