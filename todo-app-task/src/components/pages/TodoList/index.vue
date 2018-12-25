<template>
  <div>
    <p class="tarefas">Tarefa(s) Concluída(s):
      {{ todos.filter(todo => { return todo.concluido === true }).length }}
    </p>
    <p class="tarefas">Tarefa(s) Pendente(s):
      {{ todos.filter(todo => { return todo.concluido === false }).length }}
      <todo v-on:delete-todo="deleteTodo"
            v-on:complete-todo="complete-todo"
            v-for="todo in todos"
            v-bind:key="todo.value"
            :todo.sync="todo">
      </todo>
    </p>
    <!-- Aqui iremos passar os dados para o componente 'Todo' com o objetivo de renderizar
      o componente 'TodoList' -->
    <todo v-for="todo in todos"
          v-bind:key="todo.value"
          v-bind:todo="todo">
    </todo>
    <todo v-on:delete-todo="deleteTodo"
          v-for="todo in todos"
          v-bind:key="todo.value"
          v-bind:todo="todo">
    </todo>
  </div>
</template>

<script src="./TodoList.js" />

<style scoped>

p.tarefas {
  text-align: center;
}

</style>
