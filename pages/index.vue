<script setup>
/**
 * 用于设置页面的标题、布局等信息
 * @type {import('vue').DefineComponent}
 */
definePageMeta({
  layout: 'custom'
})
/**
 * 用于存储商品信息的数组
 * @type {Ref<Array>}
 */
import { ref } from 'vue';
const { data: products,pending } = await useLazyFetch('/api/products')
/**
 *  用于设置页面的标题、布局等信息
 * @type {import('vue').DefineComponent}
 * @param {string} title
 * @param {Array} meta
 * @param {string} layout
 * @param {string} layoutTransition
 */
useHead({
  title: 'this is my homepage for Nuxt course',
  meta: [
    {
      name: 'description',
      content: 'page where you are goinmg to find everything about this course of Nuxt',
    },
    {
      name: 'keywords',
      content: 'Nuxt, course, vue, javascript, frontend',
    },
    {
      name: 'author',
      content: 'Jorge Baumann',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
})



/**
 * 用于存储描述信息的数组
 * @type {Ref<Array>}
 */
const showDescription = ref([]);
/**
 * 用于切换描述信息的显示状态
 * @param {number} index
 */
const toggleDescription = (index) => {
  showDescription[index] = !showDescription[index];
};
</script>

<template>
<!-- 用于展示商品信息的列表-->
<div class="flex flex-wrap justify-center" >
  <!-- 用于展示单个商品信息的卡片-->
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4" v-for="(item,index) in pending ? products : products" :key="index">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- 商品图片 -->
        <img class="w-full h-48 object-cover" :src="item.image" alt="Product Image" />
        <!-- 商品信息 -->
        <div class="p-4">
          <h3 class="text-lg font-medium text-gray-800">{{ item.name }}</h3>
          <p class="text-gray-600">{{ item.dous }}</p>
        </div>
        <!-- 商品描述 -->
        <div class="p-4 bg-gray-100">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            @click="toggleDescription(index)"
          >
            {{ showDescription[index] ? '未知' : '已知' }}
          </button>
          <!-- 用于展示商品描述的区域 -->
          <div v-if="showDescription[index]" class="mt-2">
            <p class="text-gray-600">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
