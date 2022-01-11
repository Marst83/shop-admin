<template>
  <div>
    <img
      class="login-logo"
      src="@/assets/login_logo.png"
      alt="拉勾心选"
    >
  </div>
  <el-menu
    :unique-opened="true"
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bcc0c5"
    active-text-color="#2d8cf0"
    :collapse="store.state.isCollapse"
    router
  >
    <menu-item
      v-for="menu in $store.state.menus"
      :key="menu.path"
      :menu="menu"
    />
  </el-menu>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import MenuItem from './MenuItem.vue'

const store = useStore()

</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}

.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

  .login-logo {
    width: 200px;
    height: 60px;
  }

::-webkit-scrollbar {
  display: none;
}
</style>
