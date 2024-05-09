import pagesJson from '../pages.json'

interface pageInfo {
  path: string
  name?: string
  needAuth: boolean
  navBarTitle?: string
  isSubPage: boolean
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
    navBarTitle: pj.style?.navigationBarTitleText,
    isSubPage: !!root,
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

  return infos
}

const infos: pageInfo[] = build()

export function getPageInfos(): pageInfo[] {
  return infos
}
