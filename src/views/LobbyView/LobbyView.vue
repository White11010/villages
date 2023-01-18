<template>
  <section class="lobby">
    <div class="lobby__players">
      <div v-for="(player, index) in lobbyState.playersList" :key="index">
        {{ player.name }}
      </div>
    </div>
    <div class="lobby__actions">
      <div class="lobby__join-button" @click="createLinkToJoin">
        <p>Copy link to join</p>
      </div>
      <div class="button lobby__start-button">
        <p>Copy link to join</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
  import { onMounted, ref, reactive, onBeforeUnmount } from "vue";
  import { io } from "socket.io-client";
  import { useRoute } from "vue-router";

  const socket = io("http://localhost:3000");
  const route = useRoute();

  onMounted(() => {
    socket.emit("joinRoom", {
      room: route.params.lobbyId,
      name: route.query.name,
    });

    socket.on("playerJoined", data => {
      console.log(data);

      lobbyState.playersList = data.users;
    });

    socket.on("playerLeft", data => {
      lobbyState.playersList = data.users;
    });
  });

  onBeforeUnmount(() => {
    socket.emit("leaveRoom", {
      room: route.params.lobbyId,
      name: route.query.name,
    });
  });

  const lobbyState = reactive({
    playersList: [],
  });

  const createLinkToJoin = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/start-game-settings?lobbyId=${route.params.lobbyId}`
    );
  };
</script>

<style lang="scss" scoped>
  .lobby {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    &__join-button {
      padding: 8px 20px;
      border-radius: 10px;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
</style>
