<template>
  <section class="start">
    <ul class="start__actions">
      <li class="start__action">
        <button class="start__button button-main" @click="onPlayButtonClick">
          PLAY
        </button>
      </li>
      <li class="start__action">
        <button class="start__button button-main">OPTIONS</button>
      </li>
      <li class="start__action">
        <button class="start__button button-main">RULES</button>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
  import { useRouter } from "vue-router";

  const router = useRouter();

  const onPlayButtonClick = (): void => {
    router.push({ name: "StartGameSettings" });
  };

  const onStartButtonClick = (name: string): void => {
    router.push({
      name: "Lobby",
      params: {
        lobbyId: Date.now().toString(),
      },
      query: {
        name: name,
      },
    });
  };
</script>

<style lang="scss" scoped>
  .start {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $green-light;

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
    }

    &__button-label {
      font-family: sans-serif;
      font-weight: 600;
      color: #cfed19;
    }
  }
</style>
