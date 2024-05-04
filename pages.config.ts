import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [],
  globalStyle: {
    // navigationBarTitleText: 'uni-vitesse',
    navigationStyle: 'custom',
    // 'navigationBarBackgroundColor': '@navBgColor',
    // 'navigationBarTextStyle': '@navTxtStyle',
    // 'backgroundColor': '@bgColor',
    // 'backgroundTextStyle': '@bgTxtStyle',
    // 'backgroundColorTop': '@bgColorTop',
    // 'backgroundColorBottom': '@bgColorBottom',
    // 'app-plus': {
    //   bounce: 'none',
    // },
  },
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#3cc51f',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [
      {
        text: '主页',
        pagePath: 'pages/index',
      },
      {
        text: '我的',
        pagePath: 'pages/mine',
      },
    ],
  },
})
