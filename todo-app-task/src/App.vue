<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
    <router-view></router-view>
  </div>
</template>

<script src='./services/Data.js' />

<style></style>
