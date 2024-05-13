import pagesJson from '../pages.json'

interface pageInfo {
  path: string
  name?: string
  needAuth: boolean
  navBarTitle: string
  isSubPage: boolean
  hasTabBar: boolean
}

interface pageJson {
  path: string
  type?: string
  layout?: string
  name?: string
  needAuth?: boolean
  style?: {
    navigationBarTitleText?: string
  }
}

interface tabBars {
  text: string
  pagePath: string
}

// eslint-disable-next-line unused-imports/no-unused-vars
interface tabBarJson {
  list?: tabBars[]
}

interface subPageJson {
  root: string
  pages: pageJson[]
}

export function getPageJson(): any {
  return pagesJson
}

function trim(str: string, char: string) {
  if (char)
    str = str.replace(new RegExp(`^\\${char}+|\\${char}+$`, 'g'), '')

  return str.replace(/^\s+|\s+$/g, '')
}

function pageJson2Info(pj: pageJson, root?: string): pageInfo {
  root = root ? `/${root}` : ''
  return {
    path: `${root}/${trim(pj.path, '/')}`,
    name: pj.name,
    needAuth: !!pj.needAuth,
    navBarTitle: pj.style?.navigationBarTitleText || '',
    isSubPage: !!root,
    hasTabBar: false,
  }
}

function build(): pageInfo[] {
  const infos: pageInfo[] = []
  pagesJson.pages.forEach((page: pageJson) => {
    infos.push(pageJson2Info(page))
  })

  pagesJson.subPackages?.forEach((subPage: subPageJson) => {
    subPage.pages.forEach((page: pageJson) => {
      infos.push(pageJson2Info(page, subPage.root))
    })
  })

  const tabBarPages = pagesJson.tabBar?.list?.map((item: tabBars) => {
    return `/${item.pagePath}`
  })

  infos.forEach((info) => {
    if (tabBarPages.find(page => page === info.path))
      info.hasTabBar = true
  })

  return infos
}

const infos: pageInfo[] = build()

export function getPageInfos(): pageInfo[] {
  return infos
}
