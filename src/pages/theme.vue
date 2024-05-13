<!-- eslint-disable no-console -->
<script setup lang="ts">
import { useTheme } from '~/composables/theme'
import { useNavCtrl } from '~/composables/nav'

const { applyTheme, borderColor } = useTheme()
const { setNavTitle, resetNavTitle } = useNavCtrl()

const router = useRouter()
const themeVal = ref<number>(0)

function change() {
  switch (themeVal.value) {
    case 0 :
      applyTheme('light')
      break
    case 1 :
      applyTheme('dark')
      break
    case 2:
      router.push('/pages-sub/index')
      break
    case 3:
      setNavTitle('sss')
      break
    case 4:
      resetNavTitle()
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
      跳转下一页
    </wd-radio>
    <wd-radio :value="3" p="b-2" b-b-1.5 b-b-solid>
      设置NavTitle
    </wd-radio>
    <wd-radio :value="4" p="b-2" b-b-1.5 b-b-solid>
      重置NavTitle
    </wd-radio>
    <wd-radio :value="5" p="b-2">
      nothing!
    </wd-radio>
  </wd-radio-group>
</template>

<style lang="scss" scoped>
.wd-radio-group,.wd-radio {
  border-bottom-color: v-bind(borderColor)
}
.wd-radio-group {
  border-top-color: v-bind(borderColor)
}
</style>

<route lang="yaml">
layout: default
name: theme
style:
  navigationBarTitleText: 主题设置
#   disableScroll: true
#   app-plus:
#     bounce: "none"
</route>
