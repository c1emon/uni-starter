<!-- eslint-disable no-console -->
<script setup>
// const statusBarHeight = `${uni.getSystemInfoSync().statusBarHeight}px`
// console.log(`height=${statusBarHeight}`)
// const safeHeight = ref(44)
</script>

<template>
  <div
    class="app" :class="{
      dark: isDark,
    }"
  >
    <div>
      <wd-navbar id="navbar" custom-style="background-color: #E5E7EB;" :bordered="false" placeholder :fixed="true" safe-area-inset-top title="工作台" />
    </div>
    <wd-notify />
    <wd-toast />
    <main
      p="x-4 y-4"
      text="center"
      font-sans
      color="gray-700 dark:gray-200"
    >
      <slot />
    </main>
  </div>
</template>
