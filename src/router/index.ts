/// <reference types="@uni-helper/vite-plugin-uni-pages/client" />
import { pages, subPackages } from 'virtual:uni-pages'

import { createRouter } from 'uni-mini-router'

// 导入pages.json
import pagesJsonToRoutes from 'uni-parse-pages'
import pagesJson from '../pages.json'

// 引入uni-parse-pages
// 生成路由表
const routes = pagesJsonToRoutes(pagesJson)
const router = createRouter({
  routes: [...routes], // 路由表信息
})

// console.log(`route meta:\n${JSON.stringify(routes)}`)

// console.log(`page meta:\n${JSON.stringify(pages)}`)

// console.log(`subPackages meta:\n${JSON.stringify(subPackages)}`)

// let authInfo: Record<string, boolean>
routes.forEach((route) => {
  // route.name?
  const needAuth = pages.filter((page) => {
    return (page.name && page.name === route.name) || (`/${page.path}` === route.path)
  }).at(0)?.needAuth

  // authInfo[route.path] = !!needAuth
  // eslint-disable-next-line no-console
  console.log(`authInfo: ${route.path}: ${!!needAuth}`)
})

router.beforeEach((to, from, next) => {
  // next入参 false 以取消导航
  // console.log(`from: ${JSON.stringify(from, null, 4)}\nto: ${JSON.stringify(to, null, 4)}`)
  next()
})

export default router
