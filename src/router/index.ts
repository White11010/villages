import {createRouter, createWebHistory} from 'vue-router';

import StartView from '../views/StartView/StartView.vue';
import GameView from '../views/GameView/GameView.vue';

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
    }
  ]
});

export default router;