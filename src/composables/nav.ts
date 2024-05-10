import { useRoute } from 'uni-mini-router'
import type { Route } from 'uni-mini-router'
import { getPageInfos } from '~/router/pages'

const navTitles = ref<Record<string, string | undefined>>({})

export function useNavCtrl() {
  const curRoute = ref<Route>({})

  onLoad(() => {
    curRoute.value = useRoute()
  })

  function setNavTitle(title: string) {
    navTitles.value[curRoute.value.path!] = title
  }
  function resetNavTitle() {
    navTitles.value[curRoute.value.path!] = undefined
  }

  return { setNavTitle, resetNavTitle }
}

export function useNavTitle(): Ref<string> {
  const curPath = ref<string>('')
  const navTitle = ref<string>('')

  onShow(() => {
    const route = useRoute()
    curPath.value = route.path!
    navTitle.value = navTitles.value[route.path!] || getPageInfos().filter((pageInfo) => {
      return pageInfo.path === route.path
    }).at(0)?.navBarTitle || ''
  })

  watch(navTitles, (titles) => {
    navTitle.value = titles[curPath.value] || getPageInfos().filter((pageInfo) => {
      return pageInfo.path === curPath.value
    }).at(0)?.navBarTitle || ''
  }, { immediate: true, deep: true })

  return navTitle
}
