<template>
  <el-row class="flex justify-center items-center h-screen">
    <el-form class="w-1/2 p-6 bg-white rounded shadow">
      <h2 class="text-2xl font-bold mb-4">表单组件</h2>
      <el-row class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">姓名</label>
        <el-input class="w-full px-3 py-2 border border-gray-300 rounded" type="text" id="name" v-model="name" />
      </el-row>
      <el-row class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">邮箱</label>
        <el-input class="w-full px-3 py-2 border border-gray-300 rounded" type="email" id="email" v-model="email" />
      </el-row>
      <el-row class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">留言</label>
        <el-input type="textarea" v-model="message" placeholder="" class="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </el-row>
      <el-button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="success">提交</el-button>
    </el-form>
  </el-row>
</template>

<script setup>
  const name = ref('');
  const email = ref('');
  const message = ref('');
</script>

