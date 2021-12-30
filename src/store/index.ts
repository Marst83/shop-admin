import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

const state = {
  count: 0
}

export type State = typeof state
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state,
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})

export function useStore () {
  return baseUseStore(key)
}
