/**
 *
 * Arquivo: src/components/pages/TodoList/TodoList.js
 * Data: 04/12/2018
 * Descrição: arquivo responsável por lidar com a lógica inerente ao componente 'TodoList'
 * Autora: Glaucia Lemos
 *
 */

import Todo from '@/components/pages/Todo';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
  },
};
