/* eslint-disable no-console */
import axios from 'axios'
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter'

const instance = axios.create({ adapter: createUniAppAxiosAdapter(), baseURL: 'https://mock.uutool.cn/4o8k3vhl8tq0', withCredentials: false })

instance.interceptors.response.use(
  (response) => {
    // console.log(response)
    return response.data
  },
  (error) => {
    let message = ''
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          message = '未登录，请先登录'
          break
        case 403:
          message = '您没有权限操作！'
          break
      }
    }
    console.log(`error: ${message}`)
  },
)

export function getApiReq() {
  return instance.get('/')
}
