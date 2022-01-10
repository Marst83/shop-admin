import axios, { AxiosRequestConfig } from 'axios'
import { store } from '@/store'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    config.url = config.url?.trim()
    const user = store.state.user
    if (user && user.token) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${user.token}`
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 统一处理响应错误
    const { status } = response.data

    // 请求成功
    if (!status || status === 200) {
      return response
    }
    // 处理 Token 过期

    // 其它错误给出提示即可，比如 400 参数错误之类的
    ElMessage({
      type: 'error',
      message: response.data.msg,
      duration: 5 * 1000
    })
    return Promise.reject(response)
  },
  err => {
    ElMessage({
      type: 'error',
      message: err.message || '请求失败，联系管理员',
      duration: 5 * 1000
    })
    return Promise.reject(err)
  }
)

export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
