import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { IUserInfo, IMenu } from '@/api/types/common'

const state = {
  isCollapse: false,
  user: null as ({ token: string } & IUserInfo) | null,
  menus: [] as IMenu[]
}

export type State = typeof state
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state,
  getters: {},
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    },

    setUser (state, payload) {
      state.user = payload
    },

    setMenus (state, payload) {
      state.menus = payload
    }
  },
  actions: {},
  modules: {}
})

export function useStore () {
  return baseUseStore(key)
}
