<!-- eslint-disable no-console -->
<script setup>
onLoad(() => {
  // uni.setBackgroundColor({
  //   backgroundColor: '#f2f0f0',
  // })
  uni.setTabBarStyle({
    color: '#FF0000',
    selectedColor: '#00FF00',
    backgroundColor: '#0000FF',
    borderStyle: 'white',
  })
})
</script>

<template>
  <div icon-btn title="Toogle dark mode">
    <div i-carbon-sun dark:i-carbon-moon />
  </div>
</template>

<route lang="yaml">
  layout: home
</route>
