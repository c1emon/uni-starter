<!-- eslint-disable no-console -->
<script setup lang="ts">
const latitude = 39.909
const longitude = 116.39742

// onLoad(() => {
//   uni.setBackgroundColor({
//     backgroundColor: '#f2f0f0',
//   })
// })
</script>

<template>
  <view>
    <view class="page-body">
      <view class="page-section page-section-gap">
        <map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" />
      </view>
    </view>
  </view>
</template>

<route lang="yaml">
</route>
