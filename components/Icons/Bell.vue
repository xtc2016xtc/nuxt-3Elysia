<template>
  <nav class="flex items-center justify-between p-4 bg-gray-800 text-white">
    <div>
      <a href="#" class="text-xl font-bold">图标logo</a>
    </div>
    <div class="flex items-center space-x-4">
      <a href="#" class="hidden md:inline-block">首页</a>
      <a href="#" class="hidden md:inline-block">其他</a>
      <a href="#" class="hidden md:inline-block">新闻</a>
      <a href="#" class="hidden md:inline-block">世界</a>
      <button @click="toggleMenu" class="md:hidden">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div :class="{'hidden': !isMenuOpen}" class="md:hidden">
      <a href="#" class="block py-2">1</a>
      <a href="#" class="block py-2">2</a>
      <a href="#" class="block py-2">3</a>
      <a href="#" class="block py-2">4</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

/**
 * 切换菜单的显示/隐藏状态
 */
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
  /**
 * Bell.vue 组件
 * 
 * 该组件包含一个导航栏，其中包含一个图标logo和一组链接。
 * 在移动设备上，链接将隐藏，并通过点击按钮来显示/隐藏。
 * 
 * Props:
 *   - None
 * 
 * Events:
 *   - None
 * 
 * Methods:
 *   - toggleMenu: 切换菜单的显示/隐藏状态
 * 
 * Data:
 *   - isMenuOpen: 菜单的显示/隐藏状态
 */
</script>
