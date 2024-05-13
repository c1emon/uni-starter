<script setup lang="ts">
import { useTheme } from '~/composables/theme'

const { bodyHeight } = useTheme()

// const latitude = 39.909
// const longitude = 116.39742
</script>

<template>
  <div>
    <map w-full :style="{ height: bodyHeight }" :latitude="39.909" :longitude="116.39742" />
  </div>
</template>

<route lang="yaml">
layout: fullscreen
needAuth: true
style:
  navigationBarTitleText: 地图
  disableScroll: true
  app-plus:
    bounce: "none"
</route>
