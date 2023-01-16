<template>
  <section class="market">
    <MarketCard
      v-for="i in 15"
      :key="i"
    />
  </section>
</template>

<script lang="ts" setup>
import MarketCard from '../MarketCard/MarketCard.vue';
</script>

<style lang="scss" scoped>
.market {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}
</style>