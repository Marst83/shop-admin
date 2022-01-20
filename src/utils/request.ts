import axios, { AxiosRequestConfig } from 'axios'
import { store } from '@/store'
import { ElMessage, ElMessageBox } from 'element-plus'
import router from '@/router/'

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

// 控制登录过期的锁
let isRefreshing = false
// 响应拦截器
request.interceptors.response.use(
  response => {
    // 统一处理响应错误
    const { status } = response.data

    // 请求成功
    if (!status || status === 200) {
      return response
    }
    // 登录过期
    if (status === 410000) {
      if (isRefreshing) return Promise.reject(response)
      isRefreshing = true
      ElMessageBox.confirm('您的登录已过期，您可以取消停留在此页面，或确认重新登录', '登录过期', {
        confirmButtonText: '确认',
        cancelButtonText: '取消'
      }).then(
        () => {
          // 清除登录状态并跳转到登录页
          store.commit('setUser', null)
          router.push({
            name: 'login',
            query: {
              redirect: router.currentRoute.value.fullPath
            }
          })
        }
      ).finally(() => {
        isRefreshing = false
      })

      return Promise.reject(response)
    }

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
    // eslint-disable-next-line no-debugger
    debugger
    return (res.data.data || res.data) as T
  })
}
