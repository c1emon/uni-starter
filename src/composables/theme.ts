interface Theme {
  background: string
  color: string
  subBgColor: string
  borderColor: string
  statusBarHeight: number
  navBarHeight: number
  tabBarHeight: number
  systemTheme: string
  screenHeight: number
}

const defaultTheme: Theme = {
  background: '#ffffff',
  color: '#181818',
  subBgColor: '#f9f9f9',
  borderColor: '#eaeaea',
  statusBarHeight: 0,
  navBarHeight: 44,
  tabBarHeight: 50,
  systemTheme: 'light',
  screenHeight: 750,
}

// light
const theme = ref<Theme>(defaultTheme)

export function initTheme() {
  const systemInfo = uni.getSystemInfoSync()
  theme.value.statusBarHeight = systemInfo.statusBarHeight ? systemInfo.statusBarHeight : 0
  theme.value.systemTheme = systemInfo.theme ? systemInfo.theme : 'light'
  theme.value.screenHeight = systemInfo.screenHeight
}

export function setLightTheme() {
  theme.value.background = '#ffffff'
  theme.value.color = '#181818'
  theme.value.subBgColor = '#f9f9f9'
  theme.value.borderColor = '#eaeaea'
}

export function setDarkTheme() {
  theme.value.background = '#111111'
  theme.value.color = '#d2d2d2'
  theme.value.subBgColor = '#191919'
  theme.value.borderColor = '#222222'
}

export function getTabBarStyle() {
  return {
    color: theme.value.color,
    selectedColor: '#00FF00',
    backgroundColor: theme.value.background,
    borderStyle: 'white',
  }
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

export function getSubBgColor(): string {
  return theme.value.subBgColor
}

export function getBorderColor(): string {
  return theme.value.borderColor
}

export function getStatusBarHeight() {
  return theme.value.statusBarHeight
}

export function getNavBarHeight() {
  return theme.value.navBarHeight
}

export function getBodyHeight() {
  return theme.value.screenHeight - theme.value.statusBarHeight - theme.value.navBarHeight
}

export function getWDTheme() {
  return {
    // base
    colorBg: getBgColor(),
    colorContent: getColor(),
    colorWhite: getSubBgColor(),
    // navbar
    navbarColor: getColor(),
    navbarBackground: getBgColor(),
    navbarHoverColor: getBgColor(),
    navbarHeight: `${getNavBarHeight()}px`,
    // grid
    gridItemBg: getBgColor(),
    // cell
    cellTitleColor: getColor(),
    cellArrowColor: getColor(),
    cellValueColor: getColor(),
    // radio
    radioLabelColor: getColor(),
  }
}
