<template>
  <p>{{ componentName }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const componentName = ref('商品规格')
</script>
