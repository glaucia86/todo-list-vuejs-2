<template>
      <div class="ui centered card">
        <!-- o componente "Todo" aparecerá caso não esteja no modo "editar".
        Por isso que incluímos o v-show -->
        <div class="content" v-show="!ehEditavel">
          <div class="header">
            {{ todo.titulo }}
          </div>
          <div class="meta">
            {{ todo.projeto }}
          </div>
          <div class="extra content">
            <!-- INÍCIO: Botão Editar -->
            <span class="right floated edit icon" v-on:click="abrirForm">
              <i class="edit icon"></i>
            </span>
            <!-- FIM: Botão Editar -->

            <!-- INÍCIO: Botão Excluir -->
            <span class="right floated trash icon" v-on:click="deleteTodo(todo)" >
              <i class="trash icon"></i>
            </span>
            <!-- FIM: Botão Excluir -->
          </div>
        </div>
        <!-- Nessa parte do bloco o form ficará visível quando estiver no mode "editar" -->

        <!-- INÍCIO do bloco do form "editável" -->
        <div class="content" v-show="ehEditavel">
          <div class="ui form">
            <div class="field">
              <label>Título</label>
              <input type="text" v-model="todo.titulo">
            </div>
            <div class="field">
              <label>Projeto</label>
              <input type="text" v-model="todo.projeto">
            </div>
            <div class="ui two button attached buttons">
              <button class="ui basic blue button" v-on:click="fecharForm">
                Fechar X
              </button>
            </div>
          </div>
        </div>
        <!-- FIM do bloco do form "editável" -->

        <!-- Botão: Concluído -->
        <div class="ui bottom attached green basic button"
              v-show="!ehEditavel && todo.concluido"
              disabled>
          Concluído
        </div>
        <!-- Botão: Pendente -->
        <div class="ui bottom attached red basic button" v-show="!ehEditavel && !todo.concluido">
          Pendente
        </div>
    </div>
</template>

<script src="./Todo.js"/>

<style scoped></style>

