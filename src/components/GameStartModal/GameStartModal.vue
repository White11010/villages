<template>
  <div class="start-modal">
    <div class="start-modal__container">
      <div class="start-modal__content">
        <div class="start-modal__avatar"></div>
        <input
          v-model.trim="name"
          class="start-modal__name-input"
        >
        <button
          class="start-modal__button"
          @click="onStartButtonClick"
        >
          Start
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineEmits, ref} from 'vue';

const name = ref<string>('');

const emit = defineEmits(['click:start-button']);

const onStartButtonClick = (): void => {
  emit('click:start-button', name.value);
}
</script>

<style lang="scss" scoped>
.start-modal {
  &__container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
  }

  &__content {
    width: 600px;
    height: 400px;
    background-color: white;
    border-radius: 15px;
    border: 5px solid #483f0c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  &__avatar {
    width: 100px;
    height: 120px;
    border-radius: 40%;
    background-color: #483f0c;
  }

  &__name-input {
    width: 300px;
    //height: 40px;
    outline: none;
    font-size: 30px;
    box-sizing: border-box;
    padding: 8px;
  }

  &__button {
    background-color: #708c22;
    color: #CFED19;
    border: none;
    padding: 8px 16px;
    font-size: 40px;
    font-family: sans-serif;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
      background-color: #4c6215;
    }
  }
}
</style>