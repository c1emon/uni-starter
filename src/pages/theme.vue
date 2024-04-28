<!-- eslint-disable no-console -->
<script setup lang="ts">
import { getBorderColor, setDarkTheme, setLightTheme } from '~/composables/theme'

const themeVal = ref<number>(0)

function change() {
  switch (themeVal.value) {
    case 0 :
      setLightTheme()
      break
    case 1 :
      setDarkTheme()
      break
    default :
      console.log(`bad theme val: ${themeVal.value}`)
  }
}
</script>

<template>
  <wd-radio-group v-model="themeVal" p="x-2" b-b-1.5 b-t-1.5 b-b-solid b-t-solid @change="change">
    <wd-radio :value="0" p="b-2" b-b-1.5 b-b-solid class="radio-item">
      明亮
    </wd-radio>
    <wd-radio :value="1" p="b-2" b-b-1.5 b-b-solid>
      黑暗
    </wd-radio>
    <wd-radio :value="2" p="b-2" b-b-1.5 b-b-solid>
      其他0
    </wd-radio>
    <wd-radio :value="3" p="b-2" b-b-1.5 b-b-solid>
      其他1
    </wd-radio>
    <wd-radio :value="4" p="b-2" b-b-1.5 b-b-solid>
      其他2
    </wd-radio>
    <wd-radio :value="5" p="b-2">
      其他3
    </wd-radio>
  </wd-radio-group>
</template>

<style lang="scss" scoped>
.wd-radio-group,.wd-radio {
  border-bottom-color: v-bind(getBorderColor())
}
.wd-radio-group {
  border-top-color: v-bind(getBorderColor())
}
</style>

<route lang="yaml">
layout: default
# style:
#   disableScroll: true
#   app-plus:
#     bounce: "none"
</route>
