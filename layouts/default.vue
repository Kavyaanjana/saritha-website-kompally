<template>
    <div>
      <!-- Header -->
      <HeaderComponent />
  
      <!-- Main Content -->
      <main>
        <slot />
      </main>
  
      <!-- Footer -->
      <FooterComponent />
    </div>
  </template>
  
  <script setup>
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FooterComponent from '@/components/FooterComponent.vue'
  </script>
  
  <style scoped>
  main {
    min-height: 80vh;
  }
  </style>
  