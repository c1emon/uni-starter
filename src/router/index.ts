/* eslint-disable no-console */
import { createRouter } from 'uni-mini-router'
import pagesJsonToRoutes from 'uni-parse-pages'
import { getPageInfos, getPageJson } from './pages'

// 引入uni-parse-pages
// 生成路由表
const routes = pagesJsonToRoutes(getPageJson())
const router = createRouter({
  routes: [...routes], // 路由表信息
})

const authed: boolean = true

router.beforeEach((to, from, next) => {
  const pageInfo = getPageInfos().filter((pageInfo) => {
    return pageInfo.path === to.path
  }).at(0)
  if (!authed && pageInfo!.needAuth) {
    console.log('need auth')
    next(false)
    return
  }
  // next入参 false 以取消导航
  next()
})

export default router
