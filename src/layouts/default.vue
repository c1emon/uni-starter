<script setup>
import { useTheme } from '~/composables/theme'

const navTitle = useNavTitle()
const router = useRouter()
const { wotVars, bgColor, color } = useTheme()
</script>

<template>
  <div class="app">
    <wd-config-provider :theme-vars="wotVars">
      <div>
        <wd-navbar
          :bordered="false" :fixed="true" safe-area-inset-top left-arrow placeholder :title="navTitle"
          @click-left="() => router.back()"
        >
          <template #left>
            <!-- <wd-icon name="arrow-left" size="24px" /> -->
            <div class="i-fluent:ios-arrow-24-filled" />
          </template>
        </wd-navbar>
      </div>
      <wd-notify />
      <wd-toast />
      <main p="x-0.5 y-4" font-sans text="center">
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
