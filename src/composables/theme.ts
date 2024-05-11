interface theme {
  background: string
  color: string
  subBgColor: string
  borderColor: string
}

interface sysInfo {
  statusBarHeight: number
  navBarHeight: number
  tabBarHeight: number
  systemTheme: string
  screenHeight: number
}

const themes: Record<string, theme> = {}
themes.light = {
  background: '#ffffff',
  color: '#181818',
  subBgColor: '#f9f9f9',
  borderColor: '#eaeaea',
}

themes.dark = {
  background: '#111111',
  color: '#d2d2d2',
  subBgColor: '#191919',
  borderColor: '#222222',
}

const themeRef = ref<theme>(themes.light)
const sysInfoRef = ref<sysInfo>({
  statusBarHeight: 25,
  navBarHeight: 44,
  tabBarHeight: 50,
  systemTheme: 'light',
  screenHeight: 750,
})

function initTheme() {
  const systemInfo = uni.getSystemInfoSync()
  sysInfoRef.value.statusBarHeight = systemInfo.statusBarHeight ? systemInfo.statusBarHeight : 0
  sysInfoRef.value.systemTheme = systemInfo.theme ? systemInfo.theme : 'light'
  sysInfoRef.value.screenHeight = systemInfo.screenHeight
}
initTheme()

export function useTheme() {
  function applyTheme(themeName: string) {
    themeRef.value = themes[themeName]
  }

  function applyBackgroundColor() {
    // #ifdef MP-WEIXIN || MP-BAIDU || MP-QQ || MP-KUAISHOU || MP-JD
    uni.setBackgroundColor({
      backgroundColor: themeRef.value.background,
      backgroundColorTop: themeRef.value.background,
      backgroundColorBottom: themeRef.value.background,
    })
    // #endif
  }

  function applyTabBarStyle() {
    uni.setTabBarStyle({
      color: themeRef.value.color,
      selectedColor: '#00FF00',
      backgroundColor: themeRef.value.background,
      borderStyle: 'white',
    })
  }

  const bgColor = computed(() => themeRef.value.background)
  const color = computed(() => themeRef.value.color)
  const borderColor = computed(() => themeRef.value.borderColor)
  const statusBarHeight = computed(() => sysInfoRef.value.statusBarHeight)
  const navBarHeight = computed(() => sysInfoRef.value.navBarHeight)

  const bodyHeight = computed(() => {
    return `${sysInfoRef.value.screenHeight - sysInfoRef.value.statusBarHeight - sysInfoRef.value.navBarHeight}px`
  })

  const wotVars = computed(() => {
    return {
      // base
      colorBg: themeRef.value.background,
      colorContent: themeRef.value.color,
      colorWhite: themeRef.value.subBgColor,
      // navbar
      navbarColor: themeRef.value.color,
      navbarBackground: themeRef.value.background,
      navbarHoverColor: themeRef.value.background,
      navbarHeight: `${sysInfoRef.value.navBarHeight}px`,
      // grid
      gridItemBg: themeRef.value.background,
      // cell
      cellTitleColor: themeRef.value.color,
      cellArrowColor: themeRef.value.color,
      cellValueColor: themeRef.value.color,
      // radio
      radioLabelColor: themeRef.value.color,
    }
  })

  return { applyBackgroundColor, applyTabBarStyle, applyTheme, wotVars, bodyHeight, bgColor, color, borderColor, statusBarHeight, navBarHeight }
}
