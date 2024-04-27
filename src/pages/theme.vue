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
  <div class="radio-box" p="x-2" b-b-1.5 b-t-1.5 b-b-solid b-t-solid>
    <wd-radio-group v-model="themeVal" @change="change">
      <div class="radio-item" p="b-2" b-b-1.5 b-b-solid>
        <wd-radio :value="0">
          明亮
        </wd-radio>
      </div>
      <div class="radio-item" p="b-2" b-b-1.5 b-b-solid>
        <wd-radio :value="1">
          黑暗
        </wd-radio>
      </div>
      <div class="radio-item" p="b-2" b-b-1.5 b-b-solid>
        <wd-radio :value="2">
          其他0
        </wd-radio>
      </div>
      <div class="radio-item" p="b-2" b-b-1.5 b-b-solid>
        <wd-radio :value="3">
          其他1
        </wd-radio>
      </div>
      <div class="radio-item" p="b-2" b-b-1.5 b-b-solid>
        <wd-radio :value="4">
          其他2
        </wd-radio>
      </div>
      <div class="radio-item" p="b-2">
        <wd-radio :value="5">
          其他3
        </wd-radio>
      </div>
    </wd-radio-group>
  </div>
</template>

<style lang="scss" scoped>
.radio-box,.radio-item {
  border-bottom-color: v-bind(getBorderColor())
}
.radio-box {
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
