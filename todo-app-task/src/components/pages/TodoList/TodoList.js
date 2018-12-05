/**
 * Arquivo: src/components/pages/TodoList/TodoList.js
 * Data: 04/12/2018
 * Descrição: arquivo responsável por lidar com a lógica inerente ao componente
 *  'TodoList'
 * Autora: Glaucia Lemos
 */


export default {
  name: 'TodoList',
  props: ['todos'],
  data() {
    return {
      msg: '',
    };
  },
};
