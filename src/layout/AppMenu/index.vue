<template>
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
    <el-menu-item index="/">
      <el-icon><Menu /></el-icon>
      <span>{{ title }}</span>
    </el-menu-item>
    <el-sub-menu>
      <template #title>
        <el-icon><Location /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        <i class="el-icon-menu" />
        <template #title>
          商品列表
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        <i class="el-icon-menu" />
        <template #title>
          商品规格
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { Menu, Location } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const title = ref('首页')

</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}

.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

::-webkit-scrollbar {
  display: none;
}
</style>
