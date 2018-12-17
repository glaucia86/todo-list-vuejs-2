<template>
  <div>
    <p>Tarefa(s) Concluída(s):
      {{ todos.filter(todo => { return todo.concluido === true }).length }}
    </p>
    <p>Tarefa(s) Pendente(s):
      {{ todos.filter(todo => { return todo.concluido === false }).length }}
    </p>
    <!-- Aqui iremos passar os dados para o componente 'Todo' com o objetivo de renderizar
      o componente 'TodoList' -->
    <todo v-for="todo in todos" v-bind:key="todo.value" v-bind:todo="todo"></todo>
  </div>
</template>

<script src="./TodoList.js" />
<style scoped></style>
