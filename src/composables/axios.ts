/* eslint-disable no-console */
import axios from 'axios'
import axiosRetry from 'axios-retry'
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter'

const instance = axios.create({ adapter: createUniAppAxiosAdapter(), baseURL: 'http://127.0.0.1:4523/m1/3382139-796933-default/api/v1', withCredentials: false })

axiosRetry(instance, { retries: 3, onRetry: (retryCount, error) => {
  console.log(`retry ${retryCount}:  ${error} `)
} })

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'ttkkeeoonn'
    console.log(`request: ${JSON.stringify(config)}`)
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(
  (response) => {
    // if (!response)
    //   return
    console.log(`response: ${JSON.stringify(response)}`)
    if (response?.data?.code !== 0)
      console.log(`error: ${response?.data?.error}`)

    return response?.data
  },
  (error) => {
    // let message = ''
    // if (error && error.response) {
    //   switch (error.response.status) {
    //     case 401:
    //       message = '未登录，请先登录'
    //       break
    //     case 403:
    //       message = '您没有权限操作！'
    //       break
    //   }
    // }
    console.log(`error: ${error}`)
    return Promise.reject(error)
  },
)

export function getApiReq() {
  return instance.get('/test?t=2')
}
