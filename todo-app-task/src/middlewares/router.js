/**
 * Arquivo: src/middlewares/router.js
 * Data: 04/12/2018
 * Descrição: arquivo responsável por lidar com todas as rotas da aplicação.
 * Autora: Glaucia Lemos
 */

import Vue from 'vue';
import Router from 'vue-router';
import TodoList from '@/components/pages/TodoList';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/todo-list', name: 'todo-list', component: TodoList },
    // { path: '/', redirect: '/todolist' },
  ],
});