<p align='center'>
  <img src='https://user-images.githubusercontent.com/36911513/250519667-0b07fd60-968d-4d81-9185-1e8ac421ab02.png' alt='Uni Vitesse - Opinionated Vite Starter Template' width='800'/>
</p>

<!-- <h6 align='center'>
<a href="https://uni-vitesse.netlify.app/">在线 Demo</a>
</h6> -->

<h5 align='center'>
<b style="font-size:4em;">UniAPP 快速启动模版 <a href="https://github.com/c1emon/uni-starter">Uni Starter</a></b>
<br/>
<br/>
<b style="font-size:2em; ">环境配置 Copy From <a href="https://github.com/Ares-Chang/uni-vitesse">uni-vitesse</a>,  力求一个开箱即用的环境配置</b>
</h5>

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - 就是快！

- 🗂 [基于文件的约定式路由](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/pages)

- 📦 [组件自动化加载](https://github.com/Ares-Chang/uni-vitesse/blob/master/src/components)

- 📑 [布局系统](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/layouts)

- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)

- 🌐 [Axios](https://github.com/axios/axios) - 基于Promise的http client

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 🧱 [Wot Design Uni](https://wot-design-uni.cn/) - 高颜值、轻量化的uni-app组件库

- 😃 [各种图标集为你所用](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 📥 [API 自动导入](https://github.com/Ares-Chang/uni-vitesse/tree/master/src/composables) - 直接使用 Composition API 等

- ✅ 使用 [Vitest](https://vitest.dev/) 进行单元和组件测试

- 🦾 TypeScript, 当然

- 🔒︎ [锁 pnpm 包管理](https://pnpm.io/only-allow-pnpm)

- 🥦 [taze](https://github.com/antfu-collective/taze) - 让你的依赖保持新鲜

<br>

如无跨端需求, 更推荐 [Vitesse-lite](https://github.com/antfu/vitesse-lite)

## 从 [Vitesse-lite](https://github.com/antfu/vitesse-lite) 中删除了以下特性

- ~~VueUse~~

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)

- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 测试框架

- [Vitest](https://github.com/vitest-dev/vitest) - 由 Vite 支持的单元测试

### 插件

- [`Pinia`](https://pinia.vuejs.org) - 符合直觉的 Vue.js 状态管理库

- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入

- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 组件自动导入

- [`vite-plugin-vue-devtools`](https://github.com/webfansplz/vite-plugin-vue-devtools) - 旨在增强 Vue 开发者体验

- [`axios-retry`](https://github.com/softonic/axios-retry) - Axios请求重试

- [`uni-helper`](https://github.com/uni-helper) 组织

  - [`vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) - 基于文件的约定式路由

  - [`vite-plugin-uni-layouts`](https://github.com/uni-helper/vite-plugin-uni-layouts) - 页面布局系统

  - [`vite-plugin-uni-components`](https://github.com/uni-helper/vite-plugin-uni-components) - 从`unplugin-vue-components`派生并修改以适应UniApp

  - [`uni-app-types`](https://github.com/uni-helper/uni-app-types) - UniApp 类型增强

  - [`vite-plugin-uni-manifest`](https://github.com/uni-helper/vite-plugin-uni-manifest) - 使用 TypeScript 编写 UniApp 的 `manifest.json`

  - [`axios-adapter`](https://github.com/uni-helper/axios-adapter) - 为 UniApp 打造的 Axios 适配器，支持全平台

  - [`unocss-preset-uni`](https://github.com/uni-helper/unocss-preset-uni) - UnoCSS UniApp 预设，修复 `Windows` 平台频繁崩溃问题 [#3603](https://github.com/dcloudio/uni-app/issues/3603)

    - [`unocss-applet`](https://github.com/unocss-applet/unocss-applet) - UnoCSS 小程序预设，兼容在小程序中使用 [`Attributify Mode`](https://unocss.dev/presets/attributify)

  - [`eslint-config`](https://github.com/uni-helper/eslint-config) - 适用于 UniApp 的 [Antfu ESLint](https://github.com/antfu/eslint-config) 配置

### 编码风格

- 使用 [`<script setup>` 的 SFC 语法](https://github.com/vuejs/rfcs/pull/227) 与 Composition API 结合使用。
- 使用 [ESLint](https://eslint.org/) 工具检查代码格式，并使用 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 配置，使用单引号并去掉分号。

## 现在可以试试!

### 克隆到本地

如果您更喜欢使用更干净的 git 历史记录手动执行此操作

```bash
npx degit c1emon/uni-starter my-uni-app
cd my-uni-app
pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

### 检查清单

当您使用此模板时，请尝试按照清单正确更新您的信息

- [ ] 更改 `LICENSE` 中的作者姓名
- [ ] 更改 `manifest.config.ts` 中的项目名称、描述、`appid` 等
- [ ] 更改 `public` 中的图标
- [ ] 整理 `README` 并删除演示页面和组件

接下来就请享受吧！:)

### 运行

参考 uni-app 官方文档：[运行、发布uni-app](https://uniapp.dcloud.net.cn/quickstart-cli.html#%E8%BF%90%E8%A1%8C%E3%80%81%E5%8F%91%E5%B8%83uni-app)

### 备注
- 使用自定义NavBar替代原生导航栏，`navbarHeight=44px`
- 增加home以及default布局
- Axios拦截器需在应用axiosRetry前添加
- 暴露全局主题设置
- 地图组件自适应页面高度
- `npx @dcloudio/uvm@latest`一键升级UniApp相关依赖
