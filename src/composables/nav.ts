import { useRoute } from 'uni-mini-router'
import { getPageInfos } from '~/router/pages'

interface titleRecords extends Record<string, string | undefined> {}

const navTitles = ref<titleRecords>({})

export function useNavCtrl() {
  const curPath = ref<string>('')

  onReady(() => {
    curPath.value = useRoute().path || ''
  })

  function setNavTitle(title: string) {
    if (curPath.value.length <= 0)
      return
    navTitles.value[curPath.value] = title
  }
  function resetNavTitle() {
    if (!curPath.value || curPath.value.length <= 0)
      return
    navTitles.value[curPath.value] = undefined
  }

  return { setNavTitle, resetNavTitle }
}

export function useNavTitle(): Ref<string> {
  const curPath = ref<string>('')
  const navTitle = ref<string>('')

  function resolveNavTitle(titles: titleRecords, curPath: string): string {
    if (curPath.length > 0 && titles[curPath])
      return navTitles.value[curPath]!
    return getPageInfos().filter((pageInfo) => {
      return pageInfo.path === curPath
    }).at(0)?.navBarTitle || ''
  }

  onShow(() => {
    const route = useRoute()
    curPath.value = route.path || ''
    navTitle.value = resolveNavTitle(navTitles.value, curPath.value)
  })

  watch(navTitles, (titles) => {
    navTitle.value = resolveNavTitle(titles, curPath.value)
  }, { deep: true })

  return navTitle
}
