<script setup>
definePageMeta({
  layout: 'custom'
})
const { data: products,pending } = await useLazyFetch('/api/products')
import { ref } from 'vue';


const showDescription = ref([]);

const toggleDescription = (index) => {
  showDescription[index] = !showDescription[index];
};
</script>

<template>
<div class="flex flex-wrap justify-center" >
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4" v-for="(item,index) in pending ? products : products" :key="index">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img class="w-full h-48 object-cover" :src="item.image" alt="Product Image" />
        <div class="p-4">
          <h3 class="text-lg font-medium text-gray-800">{{ item.name }}</h3>
          <p class="text-gray-600">{{ item.name }}</p>
        </div>
        <div class="p-4 bg-gray-100">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            @click="toggleDescription(index)"
          >
            {{ showDescription[index] ? 'Hide Description' : 'Show Description' }}
          </button>
          <div v-if="showDescription[index]" class="mt-2">
            <p class="text-gray-600">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
