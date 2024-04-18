<!-- eslint-disable no-console -->
<script setup>
onLoad(() => {
  uni.setBackgroundColor({
    backgroundColor: '#f2f0f0',
  })
})
</script>

<template>
  <div icon-btn title="Toogle dark mode" @click="toggleDark()">
    <div i-carbon-sun dark:i-carbon-moon />
  </div>
</template>

<route lang="yaml">
  layout: home
</route>
