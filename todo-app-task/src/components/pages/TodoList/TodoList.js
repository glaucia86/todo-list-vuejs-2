/**
 *
 * Arquivo: src/components/pages/TodoList/TodoList.js
 * Data: 04/12/2018
 * Descrição: arquivo responsável por lidar com a lógica inerente ao componente 'TodoList'
 * Autora: Glaucia Lemos
 *
 */
import sweetAlert from 'sweetalert';
import Todo from '@/components/pages/Todo';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      sweetAlert({
        title: 'Você tem certeza que deseja excluir a tarefa?',
        text: 'Esta tarefa será excluída!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Ok. Excluído!',
        closeOnConfirm: false,
      },
      () => {
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
        sweetAlert('Deleted!', 'Sua tarefa foi excluída.', 'success');
      });
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].feito = true;
      sweetAlert('Success!', 'Tarefa está Completa!', 'success');
    },
  },
};
