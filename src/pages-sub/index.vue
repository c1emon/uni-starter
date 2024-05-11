<script setup lang="ts">
const { setNavTitle, resetNavTitle } = useNavCtrl()
</script>

<template>
  <div>
    <h1 mb-2>
      Sub Page
    </h1>
    <p text-sm italic op75>
      <em>Sub Page Content</em>
    </p>
    <wd-button @click="() => setNavTitle('xxx')">
      set
    </wd-button>
    <wd-button @click="() => resetNavTitle()">
      reset
    </wd-button>
  </div>
</template>

<route lang="yaml">
layout: default
name: subpg
needAuth: false
style:
  navigationBarTitleText: 'subpg'
</route>
