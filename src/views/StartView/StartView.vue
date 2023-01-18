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
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter();


const onPlayButtonClick = (): void => {
  router.push({name: 'StartGameSettings'})
}



const onStartButtonClick = (name: string): void => {
  router.push({
    name: 'Lobby',
    params: {
      lobbyId: Date.now().toString(),
    },
    query: {
      name: name,
    }
  })
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