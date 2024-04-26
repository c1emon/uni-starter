<!-- eslint-disable no-console -->
<script setup lang="ts">

</script>

<template>
  <wd-config-provider class="app" :theme-vars="getWDTheme()">
    <div>
      <wd-navbar
        :bordered="false" placeholder :fixed="true" safe-area-inset-top left-text="返回" left-arrow title="工作台"
        @click-left="() => router.back()"
      />
    </div>
    <wd-notify />
    <wd-toast />
    <main font-sans text="center">
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
