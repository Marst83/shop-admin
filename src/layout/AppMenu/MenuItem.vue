<template>
  <el-sub-menu
    v-if="menu.children && menu.children.length"
    :index="menu.path"
  >
    <template #title>
      <el-icon><IconMenu /></el-icon>
      <span>{{ menu.title }}</span>
    </template>
    <MenuItem
      v-for="subMenu in menu.children"
      :key="subMenu.path"
      :menu="subMenu"
    />
  </el-sub-menu>
  <el-menu-item
    v-else
    :index="menu.path"
  >
    <template #title>
      <el-icon><message-box /></el-icon>
      <span>{{ menu.title }}</span>
    </template>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { ref } from '@vue/runtime-core'
import { Menu as IconMenu, MessageBox } from '@element-plus/icons-vue'
import type { PropType } from '@vue/runtime-core'
import type { IMenu } from '@/api/types/common'

const props = defineProps({
  menu: {
    type: Object as PropType<IMenu>,
    required: true
  }
})
const menu = ref(props.menu)

</script>

<style lang="scss" scoped>
i.Ionicons {
  margin-right: 12px;
}

.el-submenu .el-menu-item, .el-submenu :deep(.el-submenu) .el-submenu__title {
  background-color: #1f2d3d !important;
}

.el-submenu .el-menu-item:hover, .el-submenu :deep(.el-submenu) .el-submenu__title:hover {
  background-color: #001528 !important;
}
</style>
