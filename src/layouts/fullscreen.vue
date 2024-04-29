<!-- eslint-disable no-console -->
<script setup lang="ts">
import { getBgColor, getColor, getWDTheme } from '~/composables/theme'
</script>

<template>
  <div class="app">
    <wd-config-provider :theme-vars="getWDTheme()">
      <div>
        <wd-navbar
          :bordered="false" placeholder :fixed="true" safe-area-inset-top left-arrow title="工作台"
          @click-left="() => router.back()"
        >
          <template #left>
            <div>
              <div class="i-fluent:ios-arrow-24-filled" />
            </div>
          </template>
        </wd-navbar>
      </div>
      <wd-notify />
      <wd-toast />
      <main font-sans text="center">
        <slot />
      </main>
    </wd-config-provider>
  </div>
</template>

<style lang="scss" scoped>
.app {
  color: v-bind(getColor());
  background-color: v-bind(getBgColor());
}
</style>
