<script setup lang="ts">
import { onMounted } from 'vue'

import TheGame from './views/GameView/GameView.vue';

onMounted(() => {
  console.log(window.innerWidth, window.innerHeight)
})
</script>

<template>
  <TheGame />
</template>

<style scoped>

</style>
