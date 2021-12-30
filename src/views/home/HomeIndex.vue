<template>
  <p>home</p>
  <p>{{ $store.state.count }}</p>
</template>

<script lang="ts" setup>
import { useStore } from '../../store'

const store = useStore()

console.log(store.state.count)
</script>
