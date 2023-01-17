<template>
  <section class="start">
    <ul class="start__actions">
      <li class="start__action">
        <div
          class="start__button"
          @click="onPlayButtonClick"
        >
          <p class="start__button-label">PLAY</p>
        </div>
      </li>
      <li class="start__action">
        <div class="start__button">
          <p class="start__button-label">OPTIONS</p>
        </div>
      </li>
      <li class="start__action">
        <div class="start__button">
          <p class="start__button-label">RULES</p>
        </div>
      </li>
    </ul>

    <GameStartModal
      v-if="showGameStartModal"
      @click:start-button="onStartButtonClick"
    />
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { io } from "socket.io-client";

import GameStartModal from '../../components/GameStartModal/GameStartModal.vue';

const socket = io('http://localhost:3000');

const showGameStartModal = ref<boolean>(false);

const onPlayButtonClick = (): void => {
  showGameStartModal.value = true;
}

const onStartButtonClick = (name: string): void => {
  socket.emit('start', name);
}
</script>

<style lang="scss" scoped>
.start {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #A6CA59;

  &__actions {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    list-style: none;
  }

  &__button {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid brown;
    background-color: #9E900F;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 24px 36px;
    cursor: pointer;

    &:hover {
      background-color: #93820d;
    }
  }

  &__button-label {
    font-family: sans-serif;
    font-weight: 600;
    color: #CFED19;
  }
}
</style>