<!-- eslint-disable no-console -->
<script setup>
import { getBgColor, getColor, getTabBarStyle, getWDTheme } from '~/composables/theme'
onShow(() => {
  // uni.setBackgroundColor({
  //   backgroundColor: '#f2f0f0',
  // })

  uni.setTabBarStyle(getTabBarStyle())
})
</script>

<template>
  <wd-config-provider class="app" :theme-vars="getWDTheme()">
    <div>
      <wd-navbar
        :bordered="false" placeholder :fixed="true"
        safe-area-inset-top title="工作台"
      />
    </div>
    <wd-notify />
    <wd-toast />
    <main p="x-4 y-4" text="center" font-sans>
      <slot />
    </main>
  </wd-config-provider>
</template>

<style lang="scss" scoped>
.app {
  color: v-bind(getColor());
  background-color: v-bind(getBgColor());
}
</style>
