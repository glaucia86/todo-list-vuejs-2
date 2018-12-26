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
        title: 'Você Tem Certeza que Deseja Excluir a Tarefa?',
        text: 'Atenção. Esta Tarefa será Excluída!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Sim. Quero Excluir!',
        closeOnConfirm: false,
      },
      () => {
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
        sweetAlert('Excluído!', 'Sua Tarefa foi Excluída.', 'success');
      });
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].concluido = true;
      sweetAlert('Sucesso!', 'Parabéns! A sua Tarefa está Completa!', 'success');
    },
  },
};
