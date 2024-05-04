/* eslint-disable no-console */
import type { AxiosError } from 'axios'
import axios from 'axios'
import axiosRetry from 'axios-retry'
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter'

const retryableAxiosInstance = axios.create({ adapter: createUniAppAxiosAdapter(), baseURL: 'http://127.0.0.1:4523/m1/3382139-796933-default/api/v1', withCredentials: false })
retryableAxiosInstance.defaults.timeout = 3000

retryableAxiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'clemon'
    console.log(`request ${config.url}`)
    console.debug(`request:\n${JSON.stringify(config, null, 2)}`)
    return config
  },
  (err) => {
    console.error(`request error: ${JSON.stringify(err, null, 2)}`)
    return Promise.reject(err)
  },
)

retryableAxiosInstance.interceptors.response.use(
  (response) => {
    console.debug(`response:\n${JSON.stringify(response, null, 2)}`)

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

    if (error && error.config['axios-retry']?.retries && error.config['axios-retry']?.retryCount < error.config['axios-retry']?.retries)
      // retrying...
      return Promise.reject(error)

    console.error(`response error: ${JSON.stringify(error, null, 2)}`)

    return Promise.reject(error)
  },
)

axiosRetry(retryableAxiosInstance, {
  retries: 2,
  retryCondition: (err) => {
    // console.log(`retry cond: ${JSON.stringify(err, null, 2)}`)
    return axiosRetry.isNetworkOrIdempotentRequestError(err)
  },
  shouldResetTimeout: true,
  // eslint-disable-next-line unused-imports/no-unused-vars
  retryDelay: (retryCount: number, error: AxiosError) => 50,
})

export default retryableAxiosInstance
