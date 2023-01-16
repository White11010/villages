<template>
  <section class="game">
    <TheMarket />
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
    />
    <PlayerHand
      class="game__player-field game__player-field--top"
      :position="EPlayerHandPosition.TOP"
      :is-expanded="expandedHandsMap[EPlayerHandPosition.TOP]"
    />
    <PlayerHand
      class="game__player-field game__player-field--right"
      :position="EPlayerHandPosition.RIGHT"
      :is-expanded="expandedHandsMap[EPlayerHandPosition.RIGHT]"
    />
  </section>
</template>

<script lang="ts" setup>
import {reactive} from 'vue';

import TheMarket from '../../components/TheMarket/TheMarket.vue';
import PlayerHand from '../../components/PlayerHand/PlayerHand.vue';
import {EPlayerHandPosition} from '../../models/enums/player-hand-position.enum';

const expandedHandsMap = reactive({
  [EPlayerHandPosition.BOTTOM]: false,
  [EPlayerHandPosition.TOP]: false,
  [EPlayerHandPosition.LEFT]: false,
  [EPlayerHandPosition.RIGHT]: false,
})

const onExpandButtonClick = (playerHandPosition: EPlayerHandPosition): void => {
  expandedHandsMap[playerHandPosition] = !expandedHandsMap[playerHandPosition];
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
    position: absolute;

    &--bottom {
      bottom: 0;
      left: calc(50% - 520px);
    }

    &--top {
      top: 0;
      left: calc(50% - 520px);
    }

    &--left {
      top: calc(50% - 250px);
      left: 0;
    }

    &--right {
      top: calc(50% - 250px);
      right: 0;
    }
  }
}
</style>