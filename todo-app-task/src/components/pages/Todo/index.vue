<template>
      <div class='ui centered card'>
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
</template>

<script src="./Todo.js"/>

<style scoped></style>

