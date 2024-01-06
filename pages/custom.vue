<script setup>
definePageMeta({
  // Page meta
  layout: 'custom',
  // Page title
  title: 'Custom page',
  // Page description
  description: 'This is a custom page',
  // Page language
  image: 'https://nuxtjs.org/nuxt-card.png',
  // Page image
  url: 'https://nuxtjs.org/examples/custom-page',
  // Page URL
  twitter: 'nuxt_js',
  // Twitter card
  keywords: 'custom, page, nuxt',
  // Page keywords
  publishedAt: '2021-01-01',
  // Published at
  modifiedAt: '2021-01-01',
  // Modified at
  robots: 'index,follow',
  // Robots
  customData: 'Custom data',
  // Custom data
  customMeta: [
    {
      hid: 'customMeta',
      name: 'customMeta',
      content: 'Custom meta'
    }
  ]
  // Custom meta
})
</script>
<template>
  <div class="Custom page">Custom pages</div>
</template>