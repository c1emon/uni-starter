<script setup>
const router = useRouter()
</script>

<template>
  <div>
    <wd-cell title="主题设置" clickable is-link custom-title-class="cell-title" @click="() => router.push(`/pages/theme`)" />
  </div>
</template>

<style lang="scss" scoped>
:deep(.cell-title) {
  text-align: left;
}
</style>

<route lang="yaml">
layout: home
name: mine
</route>
