<template>
  <div class="ui basic content center aligned segment">
    <button class="ui basic button icon" v-on:click="abrirForm" v-show="!criarTodo">
      <i class="plus icon"></i>
    </button>
    <div class="ui centered card" v-show="criarTodo">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Título</label>
            <input v-model="titulo" type="text" ref="titulo" defaultValue="">
          </div>
          <div class="field">
            <label>Projeto</label>
            <input type="text" ref="projeto" defaultValue="">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" v-on:click="enviarForm()">
              Adicionar
            </button>
            <button class="ui basic red button" v-on:click="fecharForm">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./CreateTodo" />
<style scoped></style>

