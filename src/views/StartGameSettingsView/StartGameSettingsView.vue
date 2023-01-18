<template>
  <section class="game-settings">
    <div class="game-settings__content">
      <div class="game-settings__avatar"></div>
      <input v-model.trim="name" class="game-settings__name-input" />
      <button class="game-settings__button" @click="onStartButtonClick">
        Start
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { ref, computed } from "vue";
  import { useRouter, useRoute } from "vue-router";

  const router = useRouter();
  const route = useRoute();

  const name = ref<string>("");

  const isJoining = computed(() => {
    return !!route.query.lobbyId;
  });

  const onStartButtonClick = (): void => {
    router.push({
      name: "Lobby",
      params: {
        lobbyId: isJoining.value ? route.query.lobbyId : Date.now().toString(),
      },
      query: {
        name: name.value,
      },
    });
  };
</script>

<style lang="scss" scoped>
  .game-settings {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a6ca59;

    &__content {
      width: 600px;
      height: 400px;
      background-color: #d0c66f;
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
      color: #cfed19;
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
