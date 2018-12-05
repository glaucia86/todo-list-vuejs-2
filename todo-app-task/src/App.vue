<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
    <router-view/>
  </div>
</template>

<script src='./services/Data.js'>

/* import TodoList from '@/components/pages/TodoList';

export default {
  name: 'app',
  components: {
    TodoList,
  },
  data() {
    return {
      msg: '',
    };
  },
}; */
</script>

<style></style>
