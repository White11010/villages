<template>
<section
  class="player-hand"
  :class="playerHandStyleClass"
>
  <div class="player-hand__container">
    <div
      class="player-hand__expand-button"
      @click="onExpandButtonClick"
    >

    </div>
  </div>
</section>
</template>

<script lang="ts" setup>
import {EPlayerHandPosition} from '../../models/enums/player-hand-position.enum';
import {computed, reactive} from 'vue';

interface IPlayerHandProps {
  position: EPlayerHandPosition,
  isExpanded: boolean,
}

const props = defineProps<IPlayerHandProps>();

const positionStylesMap = {
    [EPlayerHandPosition.BOTTOM]:'player-hand--bottom',
    [EPlayerHandPosition.TOP]: 'player-hand--top',
    [EPlayerHandPosition.LEFT]: 'player-hand--left',
    [EPlayerHandPosition.RIGHT]: 'player-hand--right'
};

const expandedStylesMap = {
  [EPlayerHandPosition.BOTTOM]:'player-hand--bottom player-hand--bottom-expanded',
  [EPlayerHandPosition.TOP]: 'player-hand--top player-hand--top-expanded',
  [EPlayerHandPosition.LEFT]: 'player-hand--left player-hand--left-expanded',
  [EPlayerHandPosition.RIGHT]: 'player-hand--right player-hand--right-expanded'
}

const playerHandStyleClass = computed(() => {
  return props.isExpanded ? expandedStylesMap[props.position] : positionStylesMap[props.position]
})

const emit = defineEmits(['click:expand-button']);

const onExpandButtonClick = (): void => {
  emit('click:expand-button');
}
</script>

<style lang="scss" scoped>
.player-hand {

  background-color: #9E900F;
  box-sizing: border-box;
  border: 1px solid black;


  &__container {
    position: relative;
    height: 100%;
    width: 100%;
  }

  &__expand-button {
    position: absolute;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: #CFED19;
  }
}

// Top side player hand styles
.player-hand--top {
  height: 150px;
  width: 1040px;

  .player-hand__expand-button {
    left: calc(50% - 36px);
    bottom: -36px;
  }
}

// Bottom side player hand styles
.player-hand--bottom {
  height: 150px;
  width: 1040px;
  transition: height ease-out .2s;

  &-expanded {
    height: 400px;
    z-index: 3;

    //&::before {
    //  content: '';
    //  position: fixed;
    //  top: 0;
    //  left: 0;
    //  width: 100vw;
    //  height: 100vh;
    //  background-color: rgba(0, 0, 0, 0.5);
    //  z-index: 2;
    //}
  }

  .player-hand__expand-button {
    left: calc(50% - 36px);
    top: -36px;
  }
}

// Left side player hand styles
.player-hand--left {
  height: 500px;
  width: 150px;

  .player-hand__expand-button {
    right: -36px;
    top: calc(50% - 36px);
  }
}

// Right side player hand styles
.player-hand--right {
  height: 500px;
  width: 150px;

  .player-hand__expand-button {
    left: -36px;
    top: calc(50% - 36px);
  }
}
</style>