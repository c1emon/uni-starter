<!-- eslint-disable no-console -->
<script setup>
function themeSettingClk() {
  router.push(`/pages/theme`)
}

onLoad(() => {
  // uni.setBackgroundColor({
  //   backgroundColor: '#f2f0f0',
  // })
  // uni.setTabBarStyle({
  //   color: '#FF0000',
  //   selectedColor: '#00FF00',
  //   backgroundColor: '#0000FF',
  //   borderStyle: 'white',
  // })
})
</script>

<template>
  <wd-cell title="主题设置" clickable is-link custom-title-class="cell-title" @click="themeSettingClk" />
</template>

<style lang="scss" scoped>
:deep(.cell-title) {
  text-align: left;
}
</style>

<route lang="yaml">
  layout: home
</route>
