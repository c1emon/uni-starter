import { useRoute } from 'uni-mini-router'
import { getPageInfos } from '~/router/pages'

const navTitle = ref<string>('')

export function usePageInfo() {
  onShow(() => {
    const pageInfo = getPageInfos().filter((pageInfo) => {
      return pageInfo.path === useRoute().path
    }).at(0)
    navTitle.value = pageInfo?.navBarTitle ? pageInfo.navBarTitle : ''
  })
  function getNavTitle(): string {
    return navTitle.value
  }
  function setNavTitle(title: string) {
    navTitle.value = title
  }
  return { getNavTitle, setNavTitle }
}
