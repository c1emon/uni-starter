<script setup>
function handleClickLeft() {
  router.back()
}
</script>

<template>
  <div
    class="app" :class="{
      dark: isDark,
    }"
  >
    <div>
      <wd-navbar custom-style="background-color: #E5E7EB;" :bordered="false" placeholder :fixed="true" safe-area-inset-top left-text="返回" left-arrow title="工作台" @click-left="handleClickLeft" />
    </div>
    <wd-notify />
    <main
      p="x-4 y-4"
      font-sans text="center"
      color="gray-700 dark:gray-200"
    >
      <slot />
    </main>
  </div>
</template>
