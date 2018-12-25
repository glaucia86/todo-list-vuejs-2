/**
 *
 * Arquivo: src/components/pages/Todo/Todo.js
 * Data: 13/12/2018
 * Descrição: arquivo responsável por lidar com a lógica inerente ao componente 'Todo'.
 * Autora: Glaucia Lemos
 *
 */

export default {
  name: 'Todo',
  props: ['todo'],
  data() {
    return {
      ehEditavel: false,
    };
  },
  methods: {
    abrirForm() {
      this.ehEditavel = true;
    },
    fecharForm() {
      this.ehEditavel = false;
    },
    deleteTodo(todo) {
      this.$emit('delete-todo', todo);
    },
  },
};
