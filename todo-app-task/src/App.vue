<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import TodoList from '@/components/pages/TodoList';

export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<style></style>
