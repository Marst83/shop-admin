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
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Goods /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        <template #title>
          商品管理
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        <template #title>
          商品分类
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        <template #title>
          商品规格
        </template>
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        <template #title>
          商品评论
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><shopping-cart /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/list">
        <template #title>
          订单管理
        </template>
      </el-menu-item>
      <el-menu-item index="/order/offline">
        <template #title>
          收银订单
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon><Menu /></el-icon>
      <span>媒体</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { Menu, Goods, ShoppingCart } from '@element-plus/icons-vue'
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
