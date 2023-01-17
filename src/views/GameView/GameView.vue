<template>
  <section class="game">
    <TheMarket @click="onMarketClick"/>
    <PlayerHand
      class="game__player-field game__player-field--bottom"
      :position="EPlayerHandPosition.BOTTOM"
      :is-expanded="expandedHandsMap[EPlayerHandPosition.BOTTOM]"
      @click:expand-button="onExpandButtonClick(EPlayerHandPosition.BOTTOM)"
    />
    <PlayerHand
      class="game__player-field game__player-field--left"
      :position="EPlayerHandPosition.LEFT"
      :is-expanded="expandedHandsMap[EPlayerHandPosition.LEFT]"
      @click:expand-button="onExpandButtonClick(EPlayerHandPosition.LEFT)"
    />
    <PlayerHand
      class="game__player-field game__player-field--top"
      :position="EPlayerHandPosition.TOP"
      :is-expanded="expandedHandsMap[EPlayerHandPosition.TOP]"
      @click:expand-button="onExpandButtonClick(EPlayerHandPosition.TOP)"
    />
    <PlayerHand
      class="game__player-field game__player-field--right"
      :position="EPlayerHandPosition.RIGHT"
      :is-expanded="expandedHandsMap[EPlayerHandPosition.RIGHT]"
      @click:expand-button="onExpandButtonClick(EPlayerHandPosition.RIGHT)"
    />

    <div v-if="showBack" class="back"/>

    <DiceDeck
      v-if="isDiceRolling"
      class="game__dice-deck"
    />
  </section>
</template>

<script lang="ts" setup>
import {computed, reactive, ref} from 'vue';

import TheMarket from '../../components/TheMarket/TheMarket.vue';
import PlayerHand from '../../components/PlayerHand/PlayerHand.vue';
import {EPlayerHandPosition} from '../../models/enums/player-hand-position.enum';
import DiceDeck from '../../components/DiceDeck/DiceDeck.vue';

const expandedHandsMap = reactive({
  [EPlayerHandPosition.BOTTOM]: false,
  [EPlayerHandPosition.TOP]: false,
  [EPlayerHandPosition.LEFT]: false,
  [EPlayerHandPosition.RIGHT]: false,
})

const onExpandButtonClick = (playerHandPosition: EPlayerHandPosition): void => {
  expandedHandsMap[playerHandPosition] = !expandedHandsMap[playerHandPosition];
}

const showBack = computed(() => {
  return Object.values(expandedHandsMap).some(Boolean) || isDiceRolling.value;
})


const isDiceRolling = ref<boolean>(false);
const onMarketClick = () => {
  // isDiceRolling.value = true;
}
</script>

<style lang="scss" scoped>
.game {
  width: 100vw;
  height: 100vh;
  background-color: #A6CA59;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &__player-field {
    position: fixed;

    &--bottom {
      bottom: 0;
      left: 200px;
      width: calc(100vw - 400px);
    }
    &--top {
      top: 0;
      left: 200px;
      width: calc(100vw - 400px);
    }
    &--left {
      top: 200px;
      left: 0;
      height: calc(100vh - 400px);
    }
    &--right {
      top: 200px;
      right: 0;
      height: calc(100vh - 400px);
    }
  }

  &__dice-deck {
    position: fixed;
    top: calc(50% - 300px);
    left: calc(50% - 450px);
    width: 900px;
    height: 600px;
    animation: .5s 1 normal dice-deck;
  }

  @keyframes dice-deck {
    0% {
      left: 100%;
    }

    75% {
      left: calc(50% - 550px);
    }

    100% {
      left: calc(50% - 450px);
    }
  }
}

.back {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  animation: .1s 1 normal shadow;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
}

@keyframes shadow {
  from {
    background-color: rgba(0, 0, 0, 0);
  }

  to {
    background-color: rgba(0, 0, 0, 0.25);
  }
}
</style>