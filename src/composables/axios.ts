/* eslint-disable no-console */
import axios from 'axios'
import axiosRetry from 'axios-retry'
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter'

const instance = axios.create({ adapter: createUniAppAxiosAdapter(), baseURL: 'http://127.0.0.1:4523/m1/3382139-796933-default/api/v1', withCredentials: false })

axiosRetry(instance, {
  retries: 3,
})

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'clemon'
    console.debug(`request:\n${JSON.stringify(config, null, 4)}`)
    return config
  },
  (err) => {
    console.error(`request error: ${JSON.stringify(err, null, 4)}`)
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(
  (response) => {
    console.debug(`response:\n${JSON.stringify(response, null, 4)}`)

    return response.data
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
    console.error(`response error: ${JSON.stringify(error, null, 4)}`)
    return Promise.reject(error)
  },
)

export function getApiReq() {
  return instance.get('/test?t=2')
}
