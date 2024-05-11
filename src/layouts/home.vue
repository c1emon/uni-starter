<script setup>
import { getBgColor, getColor, getTabBarStyle, getWDTheme } from '~/composables/theme'
</script>

<template>
  <div class="app">
    <wd-config-provider :theme-vars="getWDTheme()">
      <div>
        <wd-navbar
          :bordered="false" :fixed="true"
          safe-area-inset-top placeholder
        />
      </div>
      <wd-notify />
      <wd-toast />
      <main p="x-4 y-4" text="center" font-sans>
        <slot />
      </main>
    </wd-config-provider>
  </div>
</template>

<style lang="scss" scoped>
.app {
  color: v-bind('getColor()');
  background-color: v-bind('getBgColor()');
}
</style>
