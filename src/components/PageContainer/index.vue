<template>
  <el-space
    direction="vertical"
    alignment="flex-start"
    class="content-space"
    prefix-cls="content-space"
    size="large"
    v-if="temp"
  >
    <slot />
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const temp = ref(true)
</script>

<style lang="scss" scoped>
.content-space {
  display: flex;
  :deep(.content-space__item) {
    width: 100%;
  }
  :deep(.content-space__item:last-child) {
    padding-bottom: unset !important;
  }
}
</style>
