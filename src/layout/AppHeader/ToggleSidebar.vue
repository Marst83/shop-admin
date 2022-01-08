<template>
  <span
    @click="handleCollapse"
    style="cursor: pointer;"
  >
    <el-icon
      v-if="!store.state.isCollapse"
      :size="size"
    ><Fold /></el-icon>
    <el-icon
      v-else
      :size="size"
    ><Expand /></el-icon>
  </span>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { Fold, Expand } from '@element-plus/icons-vue'
import { ref } from 'vue'

const store = useStore()
const size = ref(23)
const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>

<style lang="scss" scoped></style>
