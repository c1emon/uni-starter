<!-- eslint-disable no-console -->
<script setup lang="ts">
const systemInfo = uni.getSystemInfoSync()
const statusBarHeight = systemInfo.statusBarHeight ? systemInfo.statusBarHeight : 0
const boxHeight = systemInfo.windowHeight - statusBarHeight - 44
console.log(`systemInfo=${JSON.stringify(boxHeight)}px`)

const h = ref(`${boxHeight}px`)

const latitude = 39.909
const longitude = 116.39742
</script>

<template>
  <div b-3 b-red b-solid>
    <map w-full :style="{ height: h }" :latitude="latitude" :longitude="longitude" />
  </div>
</template>

<route lang="yaml">
layout: fullscreen
style:
  disableScroll: true
  app-plus:
    bounce: "none"
</route>
