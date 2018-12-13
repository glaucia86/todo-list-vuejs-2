<template>
  <div class="todolist">
    <p>Tarefa(s) Concluída(s):
      {{ todos.filter(todo => { return todo.concluido === true }).length }}
    </p>
    <p>Tarefa(s) Pendente(s):
      {{ todos.filter(todo => { return todo.concluido === false }).length }}
    </p>
    <div class='ui centered card' v-for="todo in todos" :key="todo.value">
      <div class='content'>
        <div class='header'>
          {{ todo.titulo }}
        </div>
        <div class='meta'>
          {{ todo.projeto }}
        </div>
        <div class='extra content'>
          <span class='right floated edit icon'>
            <i class='edit icon'></i>
          </span>
        </div>
      </div>
      <!-- Botão - Concluído -->
      <div class='ui bottom attached green basic button' v-show="todo.concluido">
        Concluído
      </div>
      <!-- Botão - Pendente -->
      <div class='ui bottom attached red basic button' v-show="!todo.concluido">
        Pendente
      </div>
    </div>
    <div></div>
  </div>
</template>

<script src="./TodoList.js" type="text/javascript"/>
<style scoped></style>
