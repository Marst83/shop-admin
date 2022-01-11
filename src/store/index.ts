import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { IUserInfo, IMenu } from '@/api/types/common'
import { setItem, getItem } from '@/utils/storage'
import { USER, MENULIST } from '@/utils/constants'

const state = {
  isCollapse: false,
  // user: null as ({ token: string } & IUserInfo) | null,
  user: getItem<{ token: string } & IUserInfo>(USER),
  // menus: [] as IMenu[]
  menus: getItem<IMenu[]>(MENULIST)
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
      setItem(USER, payload)
      state.user = payload
    },

    setMenus (state, payload) {
      setItem(MENULIST, payload)
      state.menus = payload
    }
  },
  actions: {},
  modules: {}
})

export function useStore () {
  return baseUseStore(key)
}
