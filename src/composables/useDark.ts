/* eslint-disable no-console */
enum Theme {
  Light = 'light',
  Dark = 'dark',
}
const theme = ref(Theme.Light)

export const isDark = ref(false)
export const toggleDark = function () {
  isDark.value ? setTheme(Theme.Light) : setTheme(Theme.Dark)
}
export const setLight = () => setTheme(Theme.Light)
export const setDark = () => setTheme(Theme.Dark)

/**
 * 获取当前系统是否为深色模式
 * @returns 是否为深色模式
 */
export const useDark = function () {
  const systemInfo = uni.getSystemInfoSync()
  theme.value = systemInfo?.theme === 'dark' ? Theme.Dark : Theme.Light
  console.log(`theme = ${theme.value}`)
  // #ifdef H5 || MP-WEIXIN
  uni.onThemeChange(res => res.theme === 'dark' ? setDark() : setLight())
  // #endif
  setTheme(theme.value)
  return theme
}

export const refreshTheme = function () {
  setBars(theme.value)
}

function setBody(theTheme: Theme) {
  switch (theTheme) {
    case 'light':
      isDark.value = false

      break
    case 'dark':
      isDark.value = true

      break
  }
}

function setBars(theTheme: Theme) {
  let navBar = {}
  let tabBar = {}
  switch (theTheme) {
    case 'light':
      navBar = {
        frontColor: '#000000',
        backgroundColor: '#ffffff',
      }
      tabBar = {
        color: '#374151',
        selectedColor: '#00FF00',
        backgroundColor: '#ffffff',
        borderStyle: 'black',
      }
      break
    case 'dark':
      navBar = {
        frontColor: '#ffffff',
        backgroundColor: '#121212',
      }
      tabBar = {
        color: '#E5E7EB',
        selectedColor: '#00FF00',
        backgroundColor: '#121212',
        borderStyle: 'white',
      }
      break
  }

  uni.setNavigationBarColor(navBar)
  uni.setTabBarStyle(tabBar)
}

function setTheme(theTheme: Theme) {
  theme.value = theTheme

  setBody(theTheme)
  setBars(theTheme)
}
