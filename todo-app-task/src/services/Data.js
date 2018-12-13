/**
 * Arquivo: src/services/Data.js
 * Descrição: arquivo responsável por tratar a lógica dos dados.
 * Data: 04/12/2018
 * Autora: Glaucia Lemos
 */

import TodoList from '@/components/pages/TodoList';

export default {
  name: 'app',
  components: {
    TodoList,
  },
  data() {
    return {
      todos: [
        {
          titulo: 'Todo A',
          projeto: 'Projeto A',
          concluido: false,
        }, {
          titulo: 'Todo B',
          projeto: 'Projeto B',
          concluido: true,
        }, {
          titulo: 'Todo C',
          projeto: 'Projeto C',
          concluido: false,
        }, {
          titulo: 'Todo D',
          projeto: 'Projeto D',
          concluido: false,
        },
      ],
    };
  },
};
