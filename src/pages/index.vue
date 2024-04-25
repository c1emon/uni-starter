<!-- eslint-disable no-console -->
<script setup lang="ts">
import { useNotify } from 'wot-design-uni'
import type { LoadMoreState } from 'wot-design-uni/components/wd-loadmore/types'

const { showNotify } = useNotify()

const swiperList = ref([
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
])

const state = ref<LoadMoreState>('loading')
const num = ref<number>(0)
const max = ref<number>(60)

function handleClick(e: any) {
  console.log(e)
}
function onChange(e: any) {
  console.log(e)
}
function click(t: string) {
  if (t === 'n') {
    console.log('showNotify')
    showNotify({
      message: '通知内容',
      safeHeight: 41,
    })
  }
  else if (t === 'map') {
    router.push(`/pages/${t}`)
  }
}
function loadmore() {
  setTimeout(() => {
    num.value = num.value + 15
    state.value = 'loading'
  }, 200)
}

onReachBottom(() => {
  if (num.value === 45)
    state.value = 'error'
  else if (num.value < max.value)
    loadmore()
  else if (num.value === max.value)
    state.value = 'finished'
})

onLoad(() => {
  loadmore()
})
</script>

<template>
  <div pb-4 :theme="isDark ? 'dark' : 'light'">
    <wd-swiper :list="swiperList" autoplay :current="0" @click="handleClick" @change="onChange" />
  </div>
  <div>
    <wd-grid :column="3" bg-color="rgba(0, 0, 0, 0.02)" :theme="isDark ? 'dark' : 'light'" clickable>
      <wd-grid-item icon="picture" text="文字0" @itemclick="() => click('map')" />
      <wd-grid-item icon="picture" text="文字1" @itemclick="() => click('n')" />
      <wd-grid-item icon="picture" text="文字2" @itemclick="click" />
      <wd-grid-item icon="picture" text="文字3" @itemclick="click" />
      <wd-grid-item icon="picture" text="文字4" @itemclick="click" />
      <wd-grid-item icon="picture" text="文字5" @itemclick="click" />
    </wd-grid>
  </div>
  <div class="container">
    <div v-for="index in num" :key="index" class="list-item">
      <image src="https://img10.360buyimg.com/jmadvertisement/jfs/t1/70325/36/14954/36690/5dcd3e3bEee5006e0/aed1ccf6d5ffc764.png" />
      <div class="right">
        这是一条测试{{ index + 1 }}
      </div>
    </div>
    <wd-loadmore :state="state" @reload="loadmore" />
  </div>
</template>

<route lang="yaml">
layout: home
# style:
#   disableScroll: true
#   app-plus:
#     bounce: "none"
</route>
