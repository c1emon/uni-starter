<!-- eslint-disable no-console -->
<script setup lang="ts">
function handleClickLeft() {
  router.back()
}
</script>

<template>
  <div
    h-100vh class="app" :class="{
      dark: isDark,
    }"
  >
    <!-- style="--wot-navbar-height: 45px" -->
    <div class="navbar">
      <wd-navbar
        custom-style="background-color: #E5E7EB;" :bordered="false" placeholder :fixed="true"
        safe-area-inset-top left-text="返回" left-arrow title="工作台" @click-left="handleClickLeft"
      />
    </div>
    <wd-notify />
    <main font-sans text="center" color="gray-700 dark:gray-200">
      <slot />
    </main>
  </div>
</template>
