import {createRouter, createWebHistory} from 'vue-router';

import StartView from '../views/StartView/StartView.vue';
import GameView from '../views/GameView/GameView.vue';
import LobbyView from '../views/LobbyView/LobbyView.vue';
import StartGameSettingsView from '../views/StartGameSettingsView/StartGameSettingsView.vue';

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'Start',
      component: StartView,
    },
    {
      path: '/game',
      name: 'Game',
      component: GameView,
    },
    {
      path: '/lobby/:lobbyId',
      name: 'Lobby',
      component: LobbyView,
    },
    {
      path: '/start-game-settings',
      name: 'StartGameSettings',
      component: StartGameSettingsView
    }
  ]
});

export default router;