/**
 *
 * Arquivo: src/components/pages/TodoList/TodoList.js
 * Data: 04/12/2018
 * Descrição: arquivo responsável por lidar com a lógica inerente ao componente 'TodoList'
 * Autora: Glaucia Lemos
 *
 */
import sweetAlert from 'sweetalert';
import Todo from '../Todo/index';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      sweetAlert({
        title: 'Você tem Certeza que Deseja Excluir a Tarefa?',
        text: 'Esta Tarefa será Excluída!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Ok. Excluído!',
        closeOnConfirm: false,
      },
      () => {
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
        sweetAlert('Excluído!', 'Sua tarefa foi Excluída.', 'success');
      });
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].feito = true;
      sweetAlert('Sucesso!', 'Parabéns! A Tarefa está Completa!', 'success');
    },
  },
};
