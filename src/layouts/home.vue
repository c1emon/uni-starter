<script setup>
import { useTabBarTheme, useTheme } from '~/composables/theme'

useTabBarTheme()
const { wotVars, bgColor, color } = useTheme()
</script>

<template>
  <div class="app">
    <wd-config-provider :theme-vars="wotVars">
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
  color: v-bind(color);
  background-color: v-bind(bgColor);
}
</style>
