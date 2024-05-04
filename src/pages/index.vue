<!-- eslint-disable no-console -->
<script setup lang="ts">
import { useNotify, useToast } from 'wot-design-uni'
import type { LoadMoreState } from 'wot-design-uni/components/wd-loadmore/types'
import { getApiReq } from '~/api/v1'
import { getColor, setColor } from '~/composables/theme'

const toast = useToast()

const { showNotify } = useNotify()

const swiperList = ref([
  'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
  'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
  'https://unpkg.com/wot-design-uni-assets/panda.jpg',
  'https://img.yzcdn.cn/vant/cat.jpeg',
  'https://unpkg.com/wot-design-uni-assets/meng.jpg',
])

const autoplay = ref(false)
const state = ref<LoadMoreState>('loading')
const num = ref<number>(0)
const max = ref<number>(60)

function handleClick(e: any) {
  console.log(e)
}
// eslint-disable-next-line unused-imports/no-unused-vars
function onChange(e: any) {
  // console.log(e)

}
function click(t: string) {
  if (t === 'notice') {
    toast.show('提示信息')
    showNotify({
      message: '通知内容',
    })
  }
  else if (t === 'map') {
    router.push(`/pages/${t}`)
  }
  else if (t === 'color') {
    setColor('#FFB6C1')
  }

  else {
    getApiReq(t)
      .then(res => console.log(`getApiReq result: ${JSON.stringify(res, null, 4)}`))
      .catch((error) => { // The first request fails
        console.error(`getApiReq catched error: ${JSON.stringify(error, null, 4)}`)
      })

    // toast.show('nothing')
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

onShow(() => {
  autoplay.value = true
})

onHide(() => {
  autoplay.value = false
})

onLoad(() => {
  loadmore()
})
</script>

<template>
  <div pb-4>
    <wd-swiper :list="swiperList" :autoplay="autoplay" :current="0" @click="handleClick" @change="onChange" />
  </div>
  <div>
    <wd-grid :column="3" clickable>
      <wd-grid-item text="地图" use-icon-slot icon-size="24px" @itemclick="() => click('map')">
        <template #icon>
          <div class="i-fluent:location-arrow-24-filled h-24px w-24px" />
        </template>
      </wd-grid-item>
      <wd-grid-item use-icon-slot icon-size="24px" text="弹出通知" @itemclick="() => click('notice')">
        <template #icon>
          <div class="i-fluent:megaphone-loud-24-filled h-24px w-24px" />
        </template>
      </wd-grid-item>
      <wd-grid-item use-icon-slot icon-size="24px" text="改字色" @itemclick="() => click('color')">
        <template #icon>
          <div class="i-fluent:paint-brush-24-filled h-24px w-24px" />
        </template>
      </wd-grid-item>
      <wd-grid-item icon="picture" text="req0" @itemclick="() => click('0')" />
      <wd-grid-item icon="picture" text="req1" @itemclick="() => click('1')" />
      <wd-grid-item icon="picture" text="req2" @itemclick="() => click('2')" />
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
