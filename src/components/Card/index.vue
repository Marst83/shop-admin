<template>
  <el-card v-if="temp">
    <template #header>
      <el-space wrap>
        <slot name="header" />
      </el-space>
    </template>
    <el-space
      direction="vertical"
      alignment="flex-end"
      class="content-space"
      prefix-cls="content-space"
      size="large"
    >
      <slot />
    </el-space>
  </el-card>
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
}
</style>
