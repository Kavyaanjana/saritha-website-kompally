<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap'
    }
  ],
  bodyAttrs: {
    class: 'm-0 p-0'
  },
});

</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>