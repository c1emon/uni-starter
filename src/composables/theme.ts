interface Theme {
  background: string
  color: string
  statusBarHeight: number
  navBarHeight: number
  tabBarHeight: number
  systemTheme: string
  windowHeight: number
}

// dark
const theme = ref<Theme>({
  background: '#111111',
  color: '#d2d2d2',
  statusBarHeight: 0,
  navBarHeight: 44,
  tabBarHeight: 50,
  systemTheme: 'light',
  windowHeight: 750,
})

export function initTheme() {
  const systemInfo = uni.getSystemInfoSync()
  theme.value.statusBarHeight = systemInfo.statusBarHeight ? systemInfo.statusBarHeight : 0
  theme.value.systemTheme = systemInfo.theme ? systemInfo.theme : 'light'
  theme.value.windowHeight = systemInfo.windowHeight
}

export function setColor(color: string) {
  theme.value.color = color
}

export function getColor(): string {
  return theme.value.color
}

export function setBgColor(bgColor: string) {
  theme.value.background = bgColor
}

export function getBgColor(): string {
  return theme.value.background
}

export function getStatusBarHeight() {
  return theme.value.statusBarHeight
}

export function getNavBarHeight() {
  return theme.value.navBarHeight
}

export function getBodyHeight() {
  return theme.value.windowHeight - theme.value.statusBarHeight - theme.value.navBarHeight
}

export function getWDTheme() {
  return {
    // base
    colorBg: getBgColor(),
    colorContent: getColor(),
    // navbar
    navbarColor: getColor(),
    navbarBackground: getBgColor(),
    navbarHeight: `${getNavBarHeight()}px`,
    // grid
    gridItemBg: getBgColor(),
  }
}
