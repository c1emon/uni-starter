<script setup lang="ts">
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
          :bordered="false" :fixed="true" safe-area-inset-top placeholder left-arrow :title="navTitle"
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
  color: v-bind(color);
  background-color: v-bind(bgColor);
}
</style>
