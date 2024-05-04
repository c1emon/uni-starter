import retryableAxiosInstance from '~/composables/axios'

export function getApiReq(t: string) {
  return retryableAxiosInstance.get(`/test?t=${t}`)
}
