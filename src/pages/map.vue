<!-- eslint-disable no-console -->
<script setup lang="ts">
import { getBodyHeight } from '~/composables/theme'

// const latitude = 39.909
// const longitude = 116.39742
</script>

<template>
  <div>
    <map w-full :style="{ height: `${getBodyHeight()}px` }" :latitude="39.909" :longitude="116.39742" />
  </div>
</template>

<route lang="yaml">
layout: fullscreen
style:
  disableScroll: true
  app-plus:
    bounce: "none"
</route>
