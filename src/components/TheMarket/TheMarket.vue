<template>
  <section class="market">
    <MarketCard
      v-for="card in cardList"
      :key="card.id"
      :is-active="card.isActive"
      @click="onMarketCardClick(card.id)"
    />
  </section>
</template>

<script lang="ts" setup>
import MarketCard from '../MarketCard/MarketCard.vue';
import {reactive} from 'vue';

const cardList = reactive(Array.from({length: 15}, (_, i) => ({
  id: i,
  isActive: false,
})))

const onMarketCardClick = (cardId: number): void => {
  const activatedCard = cardList.find((card) => card.id === cardId);
  activatedCard.isActive = true;
}
</script>

<style lang="scss" scoped>
.market {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}
</style>